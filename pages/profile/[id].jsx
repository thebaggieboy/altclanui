
import { useEffect, useLayoutEffect, useState } from "react";
import ProfileForm from "../../components/ProfileForm";
import styles from "../../styles/profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { USER_TYPES, selectUser, selectUserType, setUser } from "../../features/user/userSlice";
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import fetchProfileData from "../../lib/fetchProfileData";
import fetchOrderData from "../../lib/fetchOrderData";
import Billing from "../../components/Billing";



const Profile = () => {
	const user = useSelector(selectUser);
	const router = useRouter();
	const isBrand = useSelector(selectUserType) === USER_TYPES.brand
	const dispatch = useDispatch()
	const client = useQueryClient()
	const [orders, setOrders] = useState([])
	const [orderError, setOrderError] = useState('No current Order')
	const userId = router.query?.id

	const getOrder = async()=>{
		console.log("Getting orders from api")
		const orderUrl = await fetch("https://altclan-api-v1.onrender.com/api/orders/")
		const data = await orderUrl.json()
		const orderResult = data?.filter((product) => product.user_email.toLowerCase().includes(user?.email.toLowerCase()) );
		setOrders(orderResult)
		console.log("Order State: ", orders)
	}	  
	const getMerchBrandName = async()=>{
	
	}


	useEffect(() => {
		console.log("data", client.getQueryData(["profile", user?.id, user?.user_type]))
		if (user === null) {
			router.push("/signup")
		}
		getOrder()
	}, [user, orders])

	const { data: userData, isLoading, error } = useQuery({
		queryKey: ["profile", userId, user?.user_type],
		queryFn: () => fetchProfileData(userId, isBrand), enabled: user !== null
	})
	

	const [activeSection, setAcvtiveSection] = useState("billing");

	const [subSec, setSubSec] = useState({
		active: false,
		sec: 1,
	});

	const [formActive, setFormActive] = useState({
		active: false,
		type: "",
	});

	const onEdit = (e) => {
		const { form } = e.target.dataset;
		form === "personal" && setFormActive({ active: true, type: form });
		form === "login" && setFormActive({ active: true, type: form });
	};

	const profileData = {
		personal: {
			firstName: "",
			lastName: "",
			bio: "",
			address: "",
			gender: "",
			city: "",
			state: "",
			zip: "",
		},

		login: {
			email: "johndoe38@gmail.com",
			password: "**********",
		},
	};



	if (isLoading) {
		return (
			<div role="status" className="p-10 text-center  ml-30 mr-30">
				<svg aria-hidden="true" class="w-20 h-20 text-3xl text-black animate-spin dark:text-black fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
					<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
				</svg>
				<span class="sr-only text-center flex items-center">Loading...</span>
			</div>
		)

	}

	if (error) {
		return <p> {error.message}</p>;
	}



	return (
		<>
			<main className="user-profile">
				<div
					className={`user-profile__form ${formActive.active ? "active" : ""}`}
				>
					<ProfileForm
						type={formActive.type}
						onClose={() => {
							setFormActive(false);
						}}
						defaultData={profileData}
					/>
				</div>
				<div className={styles.profileContent}>
					<div className={styles.column1}>
						<img
							src="/assets/abstract-user-flat-4.png"
							alt=""
							className={styles.image}
						/>
					</div>

					<div className={styles.column2}>
						<div className={styles.number}>
							<h1 className={styles.h1}>{user?.email}</h1>

						</div>
						<div>

							<p className={styles.p}>firstname: {userData?.first_name}</p>
							<p className={styles.p}>lastname: {userData?.last_name}</p>
							<p className={styles.p}>phone: {userData?.mobile_number}</p>

							<button
								onClick={onEdit}
								data-form="personal"
								className={styles.profileButton}
							>
								Update profile
							</button>

							<button
								data-form="login"
								onClick={onEdit}
								className={styles.profileButton}
							>
								Change password
							</button>
						</div>
					</div>
				</div>
			</main>

			<hr />
			<nav className="user-profile__nav">
				<div
					className={`user-profile__nav-item ${activeSection === "orders" ? "active" : ""
						}`}
					onClick={(e) => {
						setAcvtiveSection("orders");
					}}
				>
					Orders
				</div>

				<div
					className={`user-profile__nav-item ${activeSection === "inventory" ? "active" : ""
						}`}
					onClick={(e) => {
						setAcvtiveSection("inventory");
					}}
				>
					Inventory
				</div>

				<div
					className={`user-profile__nav-item ${activeSection === "billing" ? "active" : ""
						}`}
					onClick={(e) => {
						setAcvtiveSection("billing");
					}}
				>
					Billing
				</div>
			</nav>

			<section className="user-profile__sections">
				{activeSection === "orders" && (
					<div className="orders">
						<div className={styles.center}>
							<p className={styles.grey}> 

								

<div class="p-5" style={{textAlign:"center"}}>

    <table  class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead style={{fontSize:10}} class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 ">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                   Items(no)
                </th>
                <th scope="col" class="px-6 py-3 ">
                    Price
                </th>
				<th scope="col" class="px-6 py-3">
                    Delivered
                </th>
			
            </tr>
        </thead>
        <tbody >
		{orders.map(order=>(
		<tr key={order.id}  class="bg-white dark:bg-gray-800" style={{overflowX:'hidden'}}>
                <th scope="row" style={{fontSize:10}} class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   <a href="" style={{textDecoration:"underline"}}>{order.id}</a>
                </th>
                <td class="px-6 py-4">
                  {order.number_of_items}
                </td>
                <td class="px-6 py-4">
				₦{order.total_amount}
                </td>
				<td class="px-6 py-4">

				{order.delivered === true ? <img src="/5610944.png" alt=""  style={{height:20}}/>
  : <img src="/169779.png" alt=""  style={{height:20}}/>
  }
                </td>
				
            </tr>
			))}
        </tbody>
    </table> 
	
	 <br />
</div>

							</p>
						</div>
					</div>
				)}



				{activeSection === "inventory" && (
					<div className={styles.galleryContent}>
						<div className="inventory">
							<div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">



								<div className={styles.inventory}>
									<img
										src="https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
										alt=""
									/>
									<p>Product Name: Wiser</p>

									<p>Color(s): Red</p>

									<p>Stock: 5</p>
								</div>
							</div>
						</div>
					</div>
				)}

{activeSection === "billing" && (
					<div className={styles.galleryContent}>
						<div className="billing">
							<div className="p-2">

							<Billing/>
						
							</div>
						</div>
					</div>
				)}
			</section>
		</>
	);
};

export default Profile;
