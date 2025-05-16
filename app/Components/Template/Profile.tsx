const Profile = () => {
  return (
    <>
      <div className={"basis-[35%]"}>
        <img
          src="/Images/me.jpg"
          alt="tikrack"
          className={
            "size-48 rounded-full overflow-hidden object-cover outline-2 outline-gray-200/20 -outline-offset-2"
          }
        />
        <h1 className={"font-bold text-4xl mt-6"}>محمد رضا نصراله زاده</h1>
        <p className={"mt-4 text-lg leading-8"}>
          یه برنامه نویس ساده اما عاشق کوکی 🍪 و توت فرنگی 🍓 کد باز ماهر و خلاق
          مثل دونه های کوکی 🍪
        </p>
      </div>
    </>
  );
};

export default Profile;
