import Image from "next/image";
import Link from "next/link";
import style from "./beatCard.module.scss";
import miriam from "../../assets/miriam.svg";
import miriam2 from "../../assets/miriam2.svg";
import wintspread from "../../assets/wintspread.svg";
import wintspread2 from "../../assets/wintspread2.svg";
import videocircle from "../../assets/videocircle.svg";
import share from "../../assets/share.svg";
import save from "../../assets/save.svg";

function BeatCard() {
  return (
    <div className={style.containerbeatcard}>
      <div className={style.genre_header}>
        <div className={style.list_wrapper}>
          <Link href='#/'>All</Link>
          <Link href='#/'>Afro pop</Link>
          <Link href='#/'>R&B</Link>
          <Link href='#/'>world</Link>
          <div className={style.selectus}>
            <select name='' id='' placeholder='Filter'>
              <option>Filter</option>
              <option>Afro pop</option>
              <option>Gospel</option>
              <option>Fuji</option>
              <option>Juju</option>
              <option>Hip hop</option>
              <option>Blues</option>
              <option>Reggae</option>
              <option>Apala</option>
            </select>
          </div>
        </div>
      </div>

      {/* First Card....Notes its hard coded */}
      {/* Will create a dummy list and map through later */}
<<<<<<< HEAD
      <div className={style.beatCardWrapper}>
        <div className={style.containerbeatcard1}>
          <div className={style.card_header}>
            <div>
              <Image src={miriam} alt='image' className={style.imagebeatcard} />
            </div>
            <div>
              <p> Miriam </p>
=======
      <div className={style.containerbeatcard1}>
        <div className={style.card_header}>
          <div>
            <Image src={miriam} alt="image" className={style.imagebeatcard} />
          </div>
          <h3> Miriam </h3>
          <p>@ohuly </p>
          <div className={style.make_circle}></div>
          <p> 2 Hours Ago</p>
        </div>

        <div className={style.card_wrap}>
          <div className={style.wrap_image}>
            <div className={style.image_snow}>
              <Image src={wintspread} alt="Snow" className={style.snow} />
>>>>>>> 95b6d1fd2622d5e8cc3f54901c565f1829497d58
            </div>
            <div>
              <p>@ohuly </p>
            </div>
            <div className={style.make_circle}></div>
            <div>
              <p> 2 Hours Ago</p>
            </div>
          </div>
<<<<<<< HEAD

          <div className={style.card_wrap}>
            <div className={style.wrap_image}>
              <div className={style.image_snow}>
                <Image src={wintspread} alt='Snow' className={style.snow} />
              </div>
              <div className={style.hideme}>
                <Image src={videocircle} alt='videocircle' />
              </div>
=======
          <div className={style.producer_content}>
            <div className={style.producer_label}>
              <div className={style.hidenow}>
                <Image src={videocircle} alt="videocircle" />
              </div>{' '}
              <div>
                <h4>Wintspread cabasky</h4>
              </div>
            </div>
            <div className={style.beat_text}>
              <p>
                Beat by Miriam @ohuly
                <br />
                released on 23 November 2022
              </p>
>>>>>>> 95b6d1fd2622d5e8cc3f54901c565f1829497d58
            </div>
            <div className={style.producer_content}>
              <div className={style.producer_label}>
                <div className={style.hidenow}>
                  <Image src={videocircle} alt='videocircle' />
                </div>{" "}
                <div>
                  <h4>Wintspeed</h4>
                </div>
              </div>
              <div className={style.beat_text}>
                <p>
                  Beat by Miriam @ohuly
                  <br />
                  released on 23 November 2022
                </p>
              </div>

              <div className={style.footerwrapper}>
                <p className={style.footerwrappertext}>NGN 90,0000 </p>{" "}
                <button className={style.btn_footer} type='submit'>
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          <div className={style.downicons}>
            <div className={style.footericontext1}>
              <div className={style.footericon1}>
                <Image src={share} alt='image' className={style.foot} />
              </div>
=======
        </div>

        <div className={style.downicons}>
          <div className={style.footericontext1}>
            <div className={style.footericon1}>
              <Image src={share} alt="image" className={style.foot} />
            </div>
>>>>>>> 95b6d1fd2622d5e8cc3f54901c565f1829497d58

            <div className={style.footertext1}>
              <p>share</p>
            </div>
          </div>

<<<<<<< HEAD
            <div className={style.footericontext1}>
              <div className={style.footericon1}>
                <Image src={save} alt='image' className={style.foot} />
              </div>
              <div className={style.footertext1}>
                <p>save for later</p>
              </div>
            </div>
          </div>
=======
          <div className={style.footericontext1}>
            <div className={style.footericon1}>
              <Image src={save} alt="image" className={style.foot} />
            </div>
            <div className={style.footertext1}>
              <p>save for later</p>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------------------------------------------------------
      --------------------------------------------------------------------------------- */}

      {/* Second Card....Notes its hard coded */}
      <div className={style.containerbeatcard1}>
        <div className={style.card_header}>
          <div>
            <Image src={miriam2} alt="image" className={style.imagebeatcard} />
          </div>
          <div>
            <h3> Miriam </h3>
          </div>
          <div>
            <p>@ohuly </p>
          </div>
          <div className={style.make_circle}></div>
          <div>
            <p> 2 Hours Ago</p>
          </div>
>>>>>>> 95b6d1fd2622d5e8cc3f54901c565f1829497d58
        </div>
        {/* -----------------------------------------------------------------------------
      --------------------------------------------------------------------------------- */}

        {/* Second Card....Notes its hard coded */}
        <div className={style.containerbeatcard1}>
          <div className={style.card_header}>
            <div>
              <Image
                src={miriam2}
                alt='image'
                className={style.imagebeatcard}
              />
            </div>
            <div>
              <p> Miriam </p>
            </div>
            <div>
              <p>@ohuly </p>
            </div>
            <div className={style.make_circle}></div>
            <div>
              <p> 2 Hours Ago</p>
            </div>
          </div>

          <div className={style.card_wrap}>
            <div className={style.wrap_image}>
              <div className={style.image_snow}>
                <Image src={wintspread2} alt='Snow' className={style.snow} />
              </div>
              <div className={style.hideme}>
                <Image src={videocircle} alt='videocircle' />
              </div>
            </div>
            <div className={style.producer_content}>
              <div className={style.producer_label}>
                <div className={style.hidenow}>
                  <Image src={videocircle} alt='videocircle' />
                </div>{" "}
                <div>
                  <h4>Wintspeed</h4>
                </div>
              </div>
              <div className={style.beat_text}>
                <p>
                  Beat by Miriam @ohuly
                  <br />
                  released on 23 November 2022
                </p>
              </div>

              <div className={style.footerwrapper}>
                <p className={style.footerwrappertext}>NGN 90,0000 </p>{" "}
                <button className={style.btn_footer} type='submit'>
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          <div className={style.downicons}>
            <div className={style.footericontext1}>
              <div className={style.footericon1}>
                <Image src={share} alt='image' className={style.foot} />
              </div>
=======
        </div>

        <div className={style.downicons}>
          <div className={style.footericontext1}>
            <div className={style.footericon1}>
              <Image src={share} alt="image" className={style.foot} />
            </div>
>>>>>>> 95b6d1fd2622d5e8cc3f54901c565f1829497d58

            <div className={style.footertext1}>
              <p>share</p>
            </div>
          </div>

<<<<<<< HEAD
            <div className={style.footericontext1}>
              <div className={style.footericon1}>
                <Image src={save} alt='image' className={style.foot} />
              </div>
              <div className={style.footertext1}>
                <p>save for later</p>
              </div>
=======
          <div className={style.footericontext1}>
            <div className={style.footericon1}>
              <Image src={save} alt="image" className={style.foot} />
            </div>
            <div className={style.footertext1}>
              <p>save for later</p>
>>>>>>> 95b6d1fd2622d5e8cc3f54901c565f1829497d58
            </div>
          </div>
        </div>
      </div>

      {/* <div className={style.loadmore}>
      <p>load more...</p> 
        </div> */}
    </div>
  );
}

export default BeatCard;
