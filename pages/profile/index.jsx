import Image from "next/image";
import { useRef, useState } from "react";
import ProfileForm from "../../components/ProfileForm";

const Profile = () => {
	const [activeSection, setAcvtiveSection] = useState("account");

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
			firstName: "john",
			lastName: "doe",
			gender: "male",
		},
		login: {
			email: "johndoe38@gmail.com",
			password: "**********",
		},
	};

	return (
		<>
			<main className="user-profile">
				<div
					className={`user-profile__form ${formActive.active ? "active" : ""}`}>
					<ProfileForm
						type={formActive.type}
						onClose={() => {
							setFormActive(false);
						}}
						defaultData={profileData}
					/>
				</div>
				<nav className="user-profile__nav">
					<div
						className={`user-profile__nav-item ${
							activeSection === "orders" ? "active" : ""
						}`}
						onClick={(e) => {
							setAcvtiveSection("orders");
						}}>
						Orders
					</div>
					<div
						className={`user-profile__nav-item ${
							activeSection === "account" ? "active" : ""
						}`}
						onClick={(e) => {
							setAcvtiveSection("account");
						}}>
						Account
					</div>
				</nav>

				<section className="user-profile__sections">
					{activeSection === "orders" && (
						<div className="orders py-16 min-h-[20rem]">
							<h1 className="font-semibold text-2xl ml-[4rem] ">
								No orders here...
							</h1>
						</div>
					)}
					{activeSection === "account" && (
						<div className="account">
							{/* {!subSec.active && ( */}
							<nav className="account__nav shadow-sm ">
								<div
									onClick={() => setSubSec({ sec: 1, active: true })}
									className="account__nav-item">
									<span>personal information</span>
                  <Image className="mt-1" src="/assets/arrow-right-short.svg" width={20} height={20} alt="arrow svg"/>
								</div>
								<div
									onClick={() => setSubSec({ sec: 2, active: true })}
									className="account__nav-item">
									<span>address book</span>
                  <Image className="mt-1" src="/assets/arrow-right-short.svg" width={20} height={20} alt="arrow svg" />
								</div>
							</nav>
							{/* )} */}

							{/* {true && ( */}
							<div className="account__content">
								<button
									onClick={() => setSubSec({ ...subSec, active: false })}
									className="flex items-center gap-x-1 mb-4 md:hidden">
									<Image
										src="/assets/arrow-left.svg"
										width={25}
										height={25}
										alt="arrow-right svg"
									/>
									<span>Back</span>
								</button>
								{subSec.sec === 1 && (
									<div className="account__sub-sec1">
										<div className="py-4 pb-2">
											<h1 className="mb-2 text-xl md:text-2xl uppercase font-black ">
												Personal details
											</h1>
											<div className="md:flex gap-x-16 items-center">
												<div>
													<h3 className="mb-1 text-lg font-semibold">Name</h3>
													<p className="mb-1">John Doe</p>
												</div>
												<div>
													<h3 className="mb-1 text-lg font-semibold">Gender</h3>
													<p className="mb-1">Male</p>
												</div>
											</div>
												<button
													onClick={onEdit}
													data-form="personal"
													className="underline italic font-medium">
													Edit
												</button>
										</div>
										<div className="py-4">
											<h1 className="mb-2 text-xl uppercase md:text-2xl font-black ">
												Login details
											</h1>
											<div className="md:flex gap-x-16 ">
												{Object.entries(profileData.login).map(
													([name, value]) => {
														return (
															<div key={name} className="mb-4">
																<h3 className="mb-2 text-lg capitalize font-semibold">
																	{name}
																</h3>
																<p className="mb-2">{value}</p>
																<button
																	data-form="login"
																	onClick={onEdit}
																	className="underline italic font-medium">
																	Edit
																</button>
															</div>
														);
													}
												)}
											</div>
										</div>
										<button className="py-1 px-4 mt-4 bg-black text-white rounded-sm ">
											Log out
										</button>
									</div>
								)}
								{subSec.sec === 2 && (
									<div className="account__sub-sec2">
										<h1>Address book</h1>
									</div>
								)}
							</div>
							{/* )} */}
						</div>
					)}
				</section>
			</main>
		</>
	);
};

export default Profile;
