import Image from "next/image";
import { useEffect, useState } from "react";
import ProfileForm from "../../components/ProfileForm";
import styles from "../../styles/profile.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { useRouter } from "next/router";

const Profile = () => {
	const data = [];
	const loading = false;
	const error = null;
	const user = useSelector(selectUser);
	const router = useRouter();

	useEffect(() => {
		if (user === null) {
			router.push("/accounts/signup");
		}
	}, [user]);

	const [activeSection, setAcvtiveSection] = useState("gallery");

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
	const userData = useSelector(selectUser);

	const profileData = {
		personal: {
			firstName: "",
			lastName: "",
			bio: "",
			address: "",
			gender: "",
		},

		login: {
			email: "johndoe38@gmail.com",
			password: "**********",
		},
	};

	if (error) {
		return <p>Error {error.message}</p>;
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
							<h1 className={styles.h1}>{userData?.email}</h1>
						</div>
						<div>
							<p className={styles.p}>Lorem ipsum dolor amet avec.</p>

							<p className={styles.p}>21 Kola Sukanya Street.</p>

							<button
								onClick={onEdit}
								data-form="personal"
								className={styles.profileButton}
							>
								Edit profile
							</button>

							<button
								data-form="login"
								onClick={onEdit}
								className={styles.profileButton}
							>
								Edit login
							</button>
						</div>
					</div>
				</div>
			</main>

			<hr />
			<nav className="user-profile__nav">
				<div
					className={`user-profile__nav-item ${
						activeSection === "orders" ? "active" : ""
					}`}
					onClick={(e) => {
						setAcvtiveSection("orders");
					}}
				>
					Orders
				</div>
				<div
					className={`user-profile__nav-item ${
						activeSection === "gallery" ? "active" : ""
					}`}
					onClick={(e) => {
						setAcvtiveSection("gallery");
					}}
				>
					Gallery
				</div>
				<div
					className={`user-profile__nav-item ${
						activeSection === "inventory" ? "active" : ""
					}`}
					onClick={(e) => {
						setAcvtiveSection("inventory");
					}}
				>
					Inventory
				</div>
			</nav>

			<section className="user-profile__sections">
				{activeSection === "orders" && (
					<div className="orders">
						<div className={styles.center}>
							<p className={styles.grey}>No current orders</p>
						</div>
					</div>
				)}

				{activeSection === "gallery" && (
					<div className={styles.galleryContent}>
						<div className="gallery">
							<div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-5">
								<div>
									<img
										src="https://images.unsplash.com/photo-1632282003890-020318a49e62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=80"
										alt=""
									/>
								</div>

								<div>
									<img
										src="https://images.unsplash.com/photo-1560891958-68bb1fe7fb78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"
										alt=""
									/>
								</div>

								<div>
									<img
										src="https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
										alt=""
									/>
								</div>

								<div>
									<img
										src="https://images.unsplash.com/photo-1612902456551-333ac5afa26e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				)}

				{activeSection === "inventory" && (
					<div className={styles.galleryContent}>
						<div className="inventory">
							<div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
								<div className={styles.inventory}>
									<img
										src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
										alt=""
									/>
									<p>Product Name: Ferragamo</p>

									<p>Color(s): Red</p>

									<p>Stock: 20</p>
								</div>

								<div className={styles.inventory}>
									<img
										src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1338&q=80"
										alt=""
									/>
									<p>Product Name: Ferragamo</p>

									<p>Color(s): Brown</p>

									<p>Stock: 12</p>
								</div>

								<div className={styles.inventory}>
									<img
										src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80"
										alt=""
									/>
									<p>Product Name: Bottega</p>

									<p>Color(s): Brown</p>

									<p>Stock: 25</p>
								</div>

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
			</section>
		</>
	);
};

export default Profile;
