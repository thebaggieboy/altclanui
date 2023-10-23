export default function SignUp(req, res) {
	const dispatch = useDispatch();

    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const submit = async (e) => {
		e.preventDefault();
		console.log("Signup button was clicked");
		await fetch("/api/signup/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				credentials: true,
			},
			body: JSON.stringify({ email, password }),
		}).then((res) => {
			if (res.ok) {
				dispatch(setUser({ email }));
				router.push("/profile");
			}
		});
	};
}