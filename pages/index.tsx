import type { NextPage } from "next";
import AturanLalai from "layouts/AturanLalai";
import Lottie from "lottie-react";
import Input from "components/Borang/Input";
import { useFormik } from "formik";

import communityAnimation from "lottie/community.json";
import Amaran from "components/Selingan/Amaran";
import Info from "components/Selingan/info";

const Halaman: NextPage = () => {
  const borangCarian = useFormik({
    initialValues: {
      carian: "",
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });
  return (
    <AturanLalai>
      <div className="w-full max-w-screen-xl py-4 flex flex-col">
        <div className="px-8 py-8 rounded-md flex flex-row gap-8 justify-between">
          <div className="flex-1 max-w-lg">
            <p className="font-bold text-xl">Selamat datang ke</p>
            <h1>Laman Samudra</h1>
            <p>
              Sebuah platform untuk pencarian pengistilahan dan perkongsian,
              yang menggunakan enjin Samudra.
            </p>

            <form onSubmit={borangCarian.handleSubmit} className="my-4">
              <Input
                label="Carian"
                name="carian"
                value={borangCarian.values.carian}
                onChange={borangCarian.handleChange}
              />
            </form>

            <Amaran>
                Halaman ini masih dalam pembangunan dan di peringkat alfa, maka
                beberapa fungsi tidak dapat digunakan buat masa ini. Terima
                kasih kerana memahami.
            </Amaran>

            <Info tajuk="Ingin menyumbang?">
              {/* ! Kalau aku pakai ol > li untuk buat list, dia bagi React Hydration Error. */}
              {/* ! Aku tak tahu nak selesaikan macam mana so aku buat macam ni dulu */}
              - Sekiranya ingin menyumbang bahagian hadapan (laman webnya), boleh ke repo <a className="text-amaran-tulisan" href="https://www.github.com/alserembani94/laman-samudra">Laman Samudra</a>.<br/> 
              - Sekiranya ingin menyumbang bahagian belakang (enjinnya), boleh ke repo <a className="text-amaran-tulisan" href="https://www.github.com/Thaza-Kun/samudra">Samudra</a>. <br/>
              - Sekiranya ingin menyumbang secara kewangan, boleh ke laman <a className="text-amaran-tulisan" href="https://www.ko-fi.com/Thaza_Kun">Ko-fi</a>.
            </Info>
          </div>
          <div>
            <Lottie
              animationData={communityAnimation}
              style={{ width: 400, height: 400 }}
            />
          </div>
        </div>
      </div>
    </AturanLalai>
  );
};

export default Halaman;
