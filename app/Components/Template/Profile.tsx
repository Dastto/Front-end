const Profile = () => {
  return (
    <>
      <div
        className={
          "w-[35%] p-[70px] pl-0 xl:fixed xl:top-0 xl:h-screen xl:right-0 z-50"
        }
      >
        <img
          src="/Images/me.jpg"
          alt="tikrack"
          className={
            "size-48 rounded-full overflow-hidden object-cover outline-2 outline-gray-200/20 -outline-offset-2"
          }
        />
        <h1 className={"font-bold text-4xl mt-6"}>محمد رضا نصراله زاده</h1>
        <p className={"mt-4 text-lg leading-8 text-gray-500"}>
          یه برنامه نویس ساده اما عاشق کوکی 🍪 و توت فرنگی 🍓 کد باز ماهر و خلاق
          مثل دونه های کوکی 🍪
        </p>
      </div>
    </>
  );
};

export default Profile;
