"use client";

import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Image from "next/image";

export default function AuthTabs() {

  const [isClient, setIsClient] = useState(false)

  const [isLogin, setIsLogin] = useState(false)

  const router = useRouter();
  const [activeTab, setActiveTab] = useState("login");

  const [loginForm, setLoginForm] = useState({
    email: "user1",
    password: "123456"
  });

  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState({
    login: false,
    register: false,
    confirmPassword: false
  });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axiosCustomerConfig
      .post("/Auth/Login", loginForm)
      .then((response: any) => {
        if (response.code === 200) {
          router.push("/learn/study");
        } else {
          toast.error("Tài khoản hoặc mật khẩu không đúng", {
            duration: 3000,
            position: "top-right"
          });
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        toast.error("Tài khoản hoặc mật khẩu không đúng", {
          duration: 3000,
          position: "top-right"
        });
      });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerForm);
    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error("Mật khẩu không khớp", {
        duration: 3000,
        position: "top-right"
      });
      return;
    }

    axiosCustomerConfig
      .post("/Auth/Register", registerForm)
      .then((response: any) => {
        if (response.code === 201) {
          toast.success("Đăng ký thành công, vui lòng đăng nhập", {
            duration: 3000,
            position: "top-right"
          });
        } else {
          toast.error("Đăng ký thất bại", {
            duration: 3000,
            position: "top-right"
          });
        }
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
  };

  const togglePasswordVisibility = (field: 'login' | 'register' | 'confirmPassword') => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const user = sessionStorage.getItem("user")
    if (user) {
      setIsLogin(true)
    }
  }, []);



  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash === "#dang-nhap") {
        setActiveTab("login");
      } else if (currentHash === "#dang-ky") {
        setActiveTab("register");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (!isClient) {
    return <></>;
  }

  if (isLogin) {
    return (
      <div className="banner-right rounded-lg p-8 text-center flex flex-col gap-10 items-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 text-nowrap">
          Chào mừng đồng nghiệp quay trở lại!
        </h2>
        <a
          href="/learn/study"
          className="text-nowrap px-6 py-4 pb-5 bg-purple-600 text-5xl text-white rounded-md hover:bg-purple-700"
        >
          Tiếp tục học
        </a>
      </div>
    )
  }

  return (
    <div className="w-full lg:banner-right lg:text-xl bg-transparent rounded-lg overflow-hidden flex flex-col items-start justify-start">
      <div className="text-white mt-4 mb-10">
        <p className="font-bold mb-2 lg:text-3xl lg:scale-95 text-center">
          KHÓA HỌC KINH DOANH KHÓA HỌC hoàn toàn miễn phí
        </p>
        <p className="lg:text-lg font-bold underline lg:scale-105 text-center">
          Bán hàng tự động - dạy học tự động - thu nhập thụ động
        </p>
      </div>

      <div className="w-full bg-green-500 flex flex-row justify-start p-4 rounded-t-2xl">
        <div className="flex-shrink-0 w-26 animate-shake animate-infinite animate-duration-[2000ms] animate-ease-in">
          <Image
            src={"/assets/images/home/banner-form-image.png"}
            width={100}
            height={100}
            alt="banner-form-image"
            className="w-full h-auto max-w-xs"
          />
        </div>
        <div className="text-white mt-4 md:mt-0 md:ml-4">
          <p className="mb-2">Không nhập form rườm rà, không nhập thẻ,</p>
          <p className="">không giới hạn thời gian - Đăng nhập là học ngay!</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full bg-white p-4">
        <div className="banner-form-list">
          <div className="banner-form-item">
            <div className="banner-form-item-inner">
              <div className="icon">
                {" "}
                <img
                  src="/template/assets/images/home/form-icon-01.svg"
                  alt=""
                />
              </div>
              <div className="txt fw-600 txt-upper txt-black">
                Không cần <br /> NHẬP THẺ
              </div>
            </div>
          </div>
          <div className="banner-form-item">
            <div className="banner-form-item-inner">
              <div className="icon">
                {" "}
                <img
                  src="/template/assets/images/home/form-icon-02.svg"
                  alt=""
                />
              </div>
              <div className="txt fw-600 txt-upper txt-black">
                Không giới hạn thời gian
              </div>
            </div>
          </div>
          <div className="banner-form-item">
            <div className="banner-form-item-inner">
              <div className="icon">
                {" "}
                <img
                  src="/template/assets/images/home/form-icon-03.svg"
                  alt=""
                />
              </div>
              <div className="txt fw-600 txt-upper txt-black">
                KHÔNG SPAM Dưới mọi hình thức
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-row items-center justify-center gap-4 w-full p-2 rounded-xl cursor-pointer border border-gray-200">
          <span className="w-12">
            <Image
              src={"/assets/images/home/icon-gg.png"}
              width={100}
              height={100}
              alt=""
            />
          </span>
          <span className="font-bold">Tiếp tục với google</span>
        </div>
      </div>

      <div className="w-full bg-white rounded-b-xl shadow-xl p-8">

        <div className="flex bg-[#f41e92] pt-2 px-2 rounded-t-xl transition-all">
          <button
            className={`w-1/2 py-2 text-center font-semibold text-2xl transition-all duration-300 relative ${activeTab === "register"
              ? "text-[#f41e92] bg-white rounded-t-lg"
              : "text-white bg-transparent"
              }`}
            onClick={() => handleTabClick("register")}
          >

            Đăng ký ngay
          </button>
          <button
            className={`w-1/2 py-2 text-center font-semibold text-2xl transition-all duration-300 relative ${activeTab === "login"
              ? "text-[#f41e92] bg-white rounded-t-lg"
              : "text-white bg-transparent "
              }`}
            onClick={() => handleTabClick("login")}
          >

            Đăng nhập
          </button>
        </div>


        <div className="w-full border-6 border-t-0 rounded-b-xl px-1 py-4 border-[#f41e92]">
          {activeTab === "login" && (
            <form onSubmit={handleLogin} className="space-y-4 animate-flip-down animate-duration-100 animate-once animate-ease-linear">
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  placeholder=""
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  className="peer w-full px-4 py-4 text-2xl border-2 border-[#E3088C] rounded-lg focus:outline-none focus:border-[#E3088C] ring-1 ring-[#E3088C] h-16"
                  id="login-email"
                />
                <label
                  htmlFor="login-email"
                  className="absolute text-2xl bg-white px-2 text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-0 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2"
                >
                  Email của bạn
                </label>
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder=""
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  className="peer w-full px-4 py-4 text-2xl border-2 border-[#E3088C] rounded-lg ring-1 ring-[#E3088C] h-16"
                  id="login-password"
                />
                <label
                  htmlFor="login-password"
                  className="absolute text-2xl bg-white px-2 text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-0 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2"
                >
                  Mật khẩu
                </label>
              </div>

              <div className="text-gray-500 text-2xl">
                Đăng nhập để tiếp tục học <a href="#" className="text-[#E3088C]">Hoàn toàn miễn phí!</a>
              </div>

              <button
                type="submit"
                className="w-full flex items-center flex-row gap-5 justify-center py-5 text-xl font-medium text-white bg-[#8A2BE2] hover:bg-[#7B27CC] rounded-lg"
              >
                <span className="flex gap-5">
                  <span className="text-yellow-300 font-bold animate-spin animate-infinite animate-duration-[2000ms] animate-ease-linear">FREE</span>
                </span>
                <p className="font-[700]">ĐĂNG NHẬP NGAY <br /> <span className="text-xs">Hoàn toàn MIỄN PHÍ | Hiệu quả cao</span></p>

              </button>

            </form>
          )}

          {activeTab === "register" && (
            <form onSubmit={handleRegister} className="space-y-4 animate-flip-down animate-once animate-duration-100 animate-ease-linear">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  value={registerForm.email}
                  onChange={handleRegisterChange}
                  className="peer w-full px-4 py-4 text-2xl border-2 border-[#E3088C] rounded-lg ring-1 ring-[#E3088C] h-16"
                  required
                  id="register-email"
                />
                <label
                  htmlFor="register-email"
                  className="absolute text-2xl bg-white px-2 text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-0 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2"
                >
                  Email của bạn
                </label>
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder=""
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                  className="peer w-full px-4 py-4 text-2xl border-2 border-[#E3088C] rounded-lg ring-1 ring-[#E3088C] h-16"
                  required
                  id="register-password"
                />
                <label
                  htmlFor="register-password"
                  className="absolute text-2xl bg-white px-2 text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-0 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2"
                >
                  Mật khẩu
                </label>
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder=""
                  value={registerForm.confirmPassword}
                  onChange={handleRegisterChange}
                  className="peer w-full px-4 py-4 text-2xl border-2 border-[#E3088C] rounded-lg ring-1 ring-[#E3088C] h-16"
                  required
                  id="register-confirm-password"
                />
                <label
                  htmlFor="register-confirm-password"
                  className="absolute text-2xl bg-white px-2 text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-0 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2"
                >
                  Xác nhận mật khẩu
                </label>
              </div>

              <div className="text-gray-500 text-lg">
                Không có thêm bước nào cả <a href="#" className="text-[#E3088C]">Đăng ký là xem được ngay!</a>
              </div>

              <button
                type="submit"
                className="w-full flex items-center flex-row gap-5 justify-center py-5 text-xl font-medium text-white bg-[#8A2BE2] hover:bg-[#7B27CC] rounded-lg"
              >
                <span className="flex gap-5">
                  <span className="text-yellow-300 font-bold animate-spin animate-infinite animate-duration-[2000ms] animate-ease-linear">FREE</span>
                </span>
                <p className="font-[700]">ĐĂNG KÝ NGAY <br /> <span className="text-xs">Hoàn toàn MIỄN PHÍ | Hiệu quả cao</span></p>

              </button>

            </form>
          )}
        </div>
        <hr className="my-2 w-8/12 m-auto" />
        <p className="text-lg">Khoá học kinh doanh thực tiễn nhất, khi mà mội kiến thức đều
          được áp dụng trên chính khoá học - và bạn sẽ được nhìn thấy DATA đầy đủ!</p>
      </div>
    </div>
  );
}
