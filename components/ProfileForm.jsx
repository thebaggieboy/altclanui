import Image from "next/image";
import { useState } from "react";
import FormInput from "./FormInput";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { useRouter } from "next/router";

export default function ProfileForm({ type, onSubmit, onClose, defaultData }) {
	const user = useSelector(selectUser);
	const [profileInfo, setProfileInfo] = useState([])
	const { personal, login } = defaultData;


	async function getProfileInfo (){
		await fetch(`https://altclan-api-v1.onrender.com/api/profile/`)
		.then((res)=>{
			res.json().then((data) => {
				const profileData = data;
				console.log(profileData)

			});
		})
		

	}
	getProfileInfo()

	const [personalData, setPersonalData] = useState({
		firstName: personal.firstName,
		lastName: personal.lastName,
		bio: personal.bio,
		address: personal.address,
		gender: personal.gender,
		city:personal.city,
		state:personal.state,
		zip:personal.zip,
        phone:personal.phone,

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

	const { firstName, lastName, address, bio, gender, city, state, zip } = personalData;

	const { email, prevPassword, newPassword } = loginData;

	if (type === "personal") {
		return (
			<div className="max-w-[40rem] mx-auto px-4 md:px-8  py-8 bg-white relative">
				<button className="absolute top-3 right-4" onClick={() => onClose()}>
					<Image src="/assets/cross.svg" width={30} height={30} alt="cross" />
				</button>
				<h1 className="text-xl font-bold mb-8">Edit personal details</h1>
				<form className="flex flex-col gap-y-4 " onSubmit={() => onSubmit()}>
					<FormInput
						label="First name"
						name="firstName"
						type="text"
						value={firstName}
						onChange={handlePersonalData}
					/>
					<FormInput
						label="Last name"
						name="lastName"
						type="text"
						value={lastName}
						onChange={handlePersonalData}
					/>
					<FormInput
						label="Bio"
						name="bio"
						type="text"
						value={bio}
						onChange={handlePersonalData}
					/>
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
						label="state"
						name="state"
						type="text"
						value={state}
						onChange={handlePersonalData}
					/>
					<FormInput
						label="zip"
						name="zip"
						type="text"
						value={zip}
						onChange={handlePersonalData}
					/>
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
						Save
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
				<form className="flex flex-col gap-y-4 " onSubmit={() => onSubmit()}>
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
