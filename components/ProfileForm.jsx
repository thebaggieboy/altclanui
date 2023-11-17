import Image from "next/image";
import { useState } from "react";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../features/user/userSlice";
import useUpdateUserData from "../hooks/useUpdateUserData";
import Loader from "./Loader"

// Function to get user by email

export default function ProfileForm({ type, onSubmit, onClose, defaultData }) {
	const user = useSelector(selectUser);
	const [profileInfo, setProfileInfo] = useState([])
	const { personal, login } = defaultData;
	const { isPending, error, mutate: updateFn, } = useUpdateUserData()
	const dispatch = useDispatch()

	const [personalData, setPersonalData] = useState({
		first_name: personal.firstName,
		last_name: personal.lastName,
		mobile_number: personal.phone,


	});

	function handlePersonalData(e) {
		const { value, name } = e.target;
		setPersonalData((prevValue) => {
			return { ...prevValue, [name]: value };
		});
	}

	const [loginData, setLoginData] = useState({
		email: login.email,
		prevPassword: "",
		newPassword: "",
	});

	function handleLoginData(e) {
		const { value, name } = e.target;
		setLoginData((prevValue) => {
			return { ...prevValue, [name]: value };
		});
	}



	const { first_name, last_name, mobile_number } = personalData;


	const { email, prevPassword, newPassword } = loginData;

	const submitHandler = async (e) => {
		e.preventDefault()
		updateFn({ id: user.id, newData: personalData })
	}

	if (error) {
		console.log(error)
	}

	if (isPending) {
		console.log("updating user")
	}

	if (type === "personal") {
		return (
			<div className="max-w-[40rem] mx-auto px-4 md:px-8  py-8 bg-white relative">
				<button className="absolute top-3 right-4" onClick={() => onClose()}>
					<Image src="/assets/cross.svg" width={30} height={30} alt="cross" />
				</button>
				<h1 className="text-xl font-bold mb-8">Edit personal details</h1>
				<form className="flex flex-col gap-y-4 " onSubmit={submitHandler}>
					<FormInput
						label="First name"
						name="first_name"
						type="text"
						value={first_name}
						onChange={handlePersonalData}
						disabled={isPending}
					/>
					<FormInput
						label="Last name"
						name="last_name"
						type="text"
						value={last_name}
						onChange={handlePersonalData}
						disabled={isPending}
					/>
					<FormInput
						label="Phone number"
						name="mobile_number"
						type="number"
						value={mobile_number}
						onChange={handlePersonalData}
						disabled={isPending}
					/>
					{/*
					<FormInput
						label="Address"
						name="address"
						type="text"
						value={address}
						onChange={handlePersonalData}
					/>
				<FormInput
						label="City"
						name="city"
						type="text"
						value={city}
						onChange={handlePersonalData}
					/>
						<FormInput
						label="State"
						name="state"
						type="text"
						value={state}
						onChange={handlePersonalData}
					/>
					<FormInput
						label="Zip Code"
						name="zip"
						type="text"
						value={zip}
						onChange={handlePersonalData}
					/> */}
					{/* <div className="flex gap-x-8">
						<FormInput
							label="Male"
							type="radio"
							name="gender"
							col={false}
							className="w-4 h-4 self-center mt-1"
							onChange={handlePersonalData}
							value="male"
							checked={personal.gender === "male"}
						/>
						<FormInput
							label="Female"
							type="radio"
							name="gender"
							col={false}
							className="w-4 h-4 self-center mt-1"
							onChange={handlePersonalData}
							value="female"
							checked={personal.gender === "female"}
						/>
					</div> */}
					<button className="px-4 py-2 mt-4 bg-black text-white md:text-xl rounded-sm self-start">
						{isPending ? <Loader /> : "Save"}
					</button>
				</form>
			</div>
		);
	}

	if (type === "login") {
		return (
			<div className="max-w-[40rem] py-8 mx-auto px-4 md:px-8 bg-white relative">
				<button className="absolute top-3 right-4" onClick={() => onClose()}>
					<Image src="/assets/cross.svg" width={30} height={30} alt="cross" />
				</button>
				<h1 className="text-xl font-bold mb-8">Edit login details</h1>
				<form className="flex flex-col gap-y-4 " onSubmit={submitHandler}>
					<FormInput
						label="Email"
						type="email"
						name="email"
						value={user?.email}
						onChange={handleLoginData}
					/>
					<FormInput
						label="Previous password"
						type="password"
						name="prevPassword"
						value={prevPassword}
						onChange={handleLoginData}
					/>
					<FormInput
						label="New password"
						type="password"
						name="newPassword"
						value={newPassword}
						onChange={handleLoginData}
					/>
					<button className="px-4 mt-4 py-1 bg-black text-white md:text-xl rounded-sm self-start">
						Submit
					</button>
				</form>
			</div>
		);
	}
}
