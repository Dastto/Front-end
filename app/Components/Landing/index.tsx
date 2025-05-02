import Left from "~/Components/Landing/Sides/Left";
import Right from "~/Components/Landing/Sides/Right";
import { useEffect, useRef, useState } from "react";
import useLenis from "~/Hooks/useLenis";

const Landing = () => {
  useLenis();

  const [overlay, setOverlay] = useState("backdrop-blur-sm");

  useEffect(() => {
    setTimeout(() => {
      setOverlay("backdrop-blur-none");
    }, 0);
    setTimeout(() => {
      setOverlay("hidden");
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={`w-full h-screen fixed top-0 right-0 transition-all duration-2000 z-40 ${overlay}`}
      ></div>
      <main className="flex justify-between w-full pt-5">
        <div className="basis-[calc(100%-540px)]">
          <Right />
        </div>
        <div className="basis-[540px] shrink-0">
          <Left />
        </div>
      </main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum saepe
        soluta voluptas. Accusamus, ad amet aperiam iure laboriosam numquam
        obcaecati sint temporibus? Ab consequatur, distinctio, illum inventore
        ipsam iste libero minus, nisi officiis placeat quibusdam vel vero?
        Doloremque eaque fuga omnis. Aliquid amet animi atque autem delectus, ea
        eos exercitationem harum ipsum iure, mollitia quidem recusandae rem
        tenetur ut voluptas voluptatibus. Animi aperiam asperiores atque autem
        blanditiis consequatur cupiditate dolore doloribus eaque est explicabo
        hic impedit, in ipsam, labore magni natus nemo nihil odit optio pariatur
        possimus quaerat quas quidem sit tempore tenetur totam veniam, veritatis
        voluptatum? Asperiores atque aut culpa deleniti dignissimos fugiat
        magnam magni molestias, quidem reprehenderit similique sint soluta sunt.
        Blanditiis dolorum facere facilis fuga inventore neque porro quibusdam
        recusandae rem unde! A adipisci aspernatur esse mollitia nesciunt nihil
        obcaecati recusandae sit ut voluptatibus! Ad aliquid deleniti deserunt
        id iure modi provident quas suscipit tempore temporibus? Cupiditate
        dicta dignissimos distinctio dolor dolore, earum eveniet expedita
        facere, hic nam natus nemo nesciunt nulla officia possimus quidem quis
        repudiandae sit voluptas voluptatem. Beatae cumque eos ex inventore
        laborum molestias mollitia, nobis nostrum quisquam rem saepe sed totam.
        Aliquid amet architecto consectetur dicta doloremque eligendi esse
        exercitationem illo impedit in incidunt iure labore laboriosam
        laudantium minus molestias natus nisi omnis praesentium quaerat quia
        quis, rem soluta sunt velit! A accusantium corporis cum est harum illo,
        impedit ipsa iure, nam natus quasi, qui quibusdam repellendus tenetur
        veritatis! Atque excepturi facere inventore officia, quisquam quos sit
        ullam voluptate. Accusamus alias, animi cum distinctio dolorem eaque
        eligendi esse excepturi hic id illum incidunt ipsum itaque iure
        laudantium minima natus perspiciatis quas, qui reiciendis repellendus
        reprehenderit rerum sequi similique suscipit? Architecto assumenda atque
        aut consectetur consequatur cum cumque dignissimos distinctio dolores
        dolorum ducimus eius eos explicabo facere facilis harum incidunt iste
        libero magni, natus nobis omnis, perferendis placeat quam quasi
        quibusdam quis quo ratione rem saepe sed tempore veritatis vero.
        Adipisci animi aut blanditiis dolorum esse eum eveniet ex excepturi illo
        impedit incidunt inventore ipsa maxime necessitatibus, nemo nulla
        officia, reiciendis ullam voluptas voluptates? Accusamus aliquid
        assumenda delectus eum hic inventore porro quibusdam unde! Ab accusamus
        assumenda commodi cum cumque excepturi illo, impedit ipsam molestiae
        nihil nulla pariatur quas quasi quidem quisquam ratione reiciendis sit
        veritatis voluptas voluptate? Delectus, dolore doloribus eos, ipsa modi
        molestiae nemo nesciunt nihil nulla numquam odio possimus, ratione
        reiciendis repellat repellendus reprehenderit saepe? Dolorem ex
        exercitationem molestias quibusdam soluta. Ab facere incidunt ipsum
        obcaecati praesentium sunt suscipit vero? Accusantium aperiam
        architecto, aut culpa delectus ea error illum maxime minus nemo neque
        nobis nulla numquam placeat quae sequi sint totam voluptas voluptates,
        voluptatum? A accusantium at blanditiis consequuntur culpa distinctio
        eius eos excepturi, id ipsa laudantium nemo officia pariatur perferendis
        perspiciatis placeat possimus provident quam quia quis reiciendis
        repudiandae, saepe sit soluta sunt veritatis vitae voluptatem. Adipisci
        aperiam commodi in libero possimus, quam repellat saepe voluptas
        voluptatum. Aliquid earum est expedita illo ipsa modi pariatur possimus
        quaerat! Animi consectetur dolor eos expedita iste maxime natus
        praesentium, quibusdam similique sunt. Aliquid libero, obcaecati quasi
        reiciendis rerum saepe voluptates? Accusamus, aliquam animi, atque
        corporis deserunt inventore ipsam maxime nobis, omnis rem similique sint
        unde veniam voluptas voluptatem? Ad, deleniti dicta eum facere illo
        illum impedit incidunt inventore natus necessitatibus neque quae quia
        ratione recusandae, rerum similique voluptatem. Beatae modi natus neque
        perferendis? Accusamus aliquam consequatur doloribus est eveniet
        exercitationem facilis id in laboriosam laudantium libero magni modi
        nesciunt nulla officia pariatur placeat praesentium quia quibusdam quis
        quisquam ratione reiciendis, rem repellat saepe, sequi temporibus vero?
        Animi aperiam assumenda autem dolore doloribus eum eveniet labore
        necessitatibus, nobis nostrum odio optio placeat quibusdam quis saepe ut
        veniam. Aliquam cupiditate doloremque, eius eveniet impedit inventore
        necessitatibus placeat. Amet aperiam assumenda consequatur cum delectus
        dolores doloribus error esse, eum ex explicabo fugiat harum illum iure,
        iusto labore libero nesciunt nostrum numquam officiis pariatur, quaerat
        quas quibusdam quos sed sint totam voluptates? Debitis, eum magnam
        mollitia obcaecati officiis quidem ut? Atque cumque dolorum error eum
        minima optio quo repellendus sed velit veritatis. Animi, commodi ea
        error necessitatibus odit porro quas suscipit voluptas. Amet at, beatae
        commodi est fugiat fugit, itaque, non optio pariatur provident quaerat
        quasi quidem unde? Beatae corporis enim eos esse eum, ipsa itaque
        laboriosam minus nam nemo neque non odit placeat quis quisquam ratione
        recusandae reiciendis saepe suscipit veniam. Accusamus amet aperiam
        aspernatur assumenda atque aut consectetur corporis cupiditate
        dignissimos dolorem doloremque doloribus id illum ipsum iusto laudantium
        libero minima minus molestias, neque nisi non nulla numquam optio
        perspiciatis praesentium quam qui quibusdam quisquam quod recusandae rem
        repudiandae sapiente sit tenetur velit veniam? Adipisci aut non officia
        porro quos rerum similique tempore! Adipisci cum dignissimos distinctio
        dolore, eligendi excepturi id laboriosam laborum neque numquam officiis
        optio perferendis porro praesentium quam quas quidem sequi suscipit vel
        vero! Ab alias, assumenda aut consequuntur, cum dolorem doloremque
        doloribus ducimus, est et expedita illum iusto minima neque nihil
        possimus quae ratione sint tempore velit vero vitae voluptas! Ad
        blanditiis deleniti dignissimos doloremque dolores, enim est excepturi
        id inventore iure modi, nam omnis optio qui rerum sit, velit voluptate!
        Dolorum ipsam neque quidem sequi. Asperiores fugiat id iste magni nisi
        non, officia quas quasi rerum tempora. Molestias nemo nulla possimus
        praesentium quis rerum vel veritatis voluptate. A accusantium adipisci
        aliquam assumenda corporis cumque cupiditate delectus deleniti dicta
        dolores ducimus eius ex expedita explicabo fugit harum hic id illum
        iusto laborum molestias mollitia natus nobis nulla odio optio pariatur
        placeat praesentium quam quia quis rem similique tempora tempore, ullam
        unde voluptate? Eligendi fuga ipsam iste obcaecati quam ratione
        reprehenderit sunt, tempore. A accusamus, asperiores atque commodi
        dignissimos eius illum impedit minus nihil recusandae repellat, sed
        tempora voluptas! Adipisci aspernatur dolore eveniet excepturi expedita
        ipsum iste itaque magnam magni minus modi mollitia natus optio possimus
        quibusdam ratione sapiente tempora temporibus vel, vitae. Consectetur
        consequuntur deserunt eius esse est eum ex maxime, nam odit, omnis quia
        tenetur, ullam voluptatibus. Amet at autem culpa cumque deleniti dicta
        dolore, eligendi expedita inventore ipsam itaque iusto, molestias
        nesciunt non quis rem reprehenderit rerum sequi voluptates.
      </p>
    </>
  );
};

export default Landing;
