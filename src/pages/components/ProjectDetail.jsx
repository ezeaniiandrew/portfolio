import coverImage from "@/assets/cover_image.jpg";
import coverImageTwo from "@/assets/cover_image_two.jpg";
import coverImageThree from "@/assets/cover_image_three.jpg";
import halfImageOne from "@/assets/half_image_one.jpg";
import halfImageTwo from "@/assets/half_image_two.jpg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

function ProjectDetail() {
  const { projectId } = useParams();

  return (
    <section className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-brand-tertiary-light">
      <div className="w-full pb-6 pt-32 grid grid-cols-12 gap-y-16 gap-x-8">
        <h1 className="text-[54px] font-semibold leading-snug text-heading-1 max-w-[737px] mx-auto row-start-1 col-start-2 col-end-12">
          Fitness Coach Web & Mobile Design
        </h1>
        <div className="row-start-2 col-span-12">
          <img src={coverImage} alt="" height={778} />
        </div>
        <div className="row-start-3 col-start-1 col-end-9 text-left">
          <h2 className="font-semibold text-[32px] leading-loose text-paragraph-tertiary">
            Overview
          </h2>
          <p className="mb-4">
            Embark on a transformative journey with our latest project, an
            innovative endeavor that redefines the landscape of digital
            expression. This project goes beyond conventional boundaries,
            pushing the limits of creativity and functionality. From
            conceptualization to execution, it&apos;s a meticulous process aimed
            at crafting experiences that resonate deeply with the audience. This
            project goes beyond conventional boundaries, pushing the limits of
            creativity and functionality. From conceptualization to execution,
            it&apos;s a meticulous process aimed at crafting experiences that
            resonate.
          </p>
          <p>
            Each element is thoughtfully curated, contributing to a harmonious
            symphony of design excellence. This project is not just about
            delivering a product; it&apos;s about curating moments, emotions,
            and connections through the medium of design. Join us on this
            venture, where every detail is a step towards digital brilliance.
          </p>
        </div>
        <aside className="text-left row-start-3 grid gap-y-4 col-start-10 col-end-13 bg-brand-secondary rounded-[10px] p-5 text-paragraph-black">
          <div>
            <h3 className="text-xl font-medium capitalize">Stellar</h3>
            <p>Designer</p>
          </div>
          <div>
            <h3 className="text-xl font-medium capitalize">3 months</h3>
            <p>Duration</p>
          </div>
          <div>
            <h3 className="text-xl font-medium capitalize">2024</h3>
            <p>Year</p>
          </div>
          <Link
            to={"#"}
            className="outline p-2 capitalize font-medium outline-1 rounded-lg flex items-center justify-center gap-2 "
          >
            <span>live site</span>
            <span>
              <MdArrowOutward />
            </span>
          </Link>
        </aside>
        <div className=" col-span-12">
          <img src={coverImageTwo} alt="" height={778} />
        </div>
        <div className="col-span-12 text-left">
          <h2 className="font-semibold text-[32px] leading-loose text-paragraph-tertiary">
            Challenge
          </h2>
          <p className="mb-4">
            In the fast-paced world of UI/UX design, each project presents a
            unique set of challenges that demand creative solutions grounded in
            user-centric principles. Let&apos;s delve into some intriguing case
            studies that highlight the dynamic nature of this field and the
            diverse challenges designers face. The challenge here lies in
            understanding the existing user experience, identifying pain points,
            and crafting a solution that not only addresses these issues but
            also adds value to the app&apos;s core functionality.
          </p>
          <ul className="list-disc list-inside">
            {[
              "Balancing innovation with familiarity is key to ensuring a seamless transition",
              " Navigating Complexity, Innovation, and User-Centric",
              "Ensuring a seamless transition for existing users",
              "Understanding the existing user experience",
              "Cross-Platform Consistency",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 text-left">
          <h2 className="font-semibold text-[32px] leading-loose text-paragraph-tertiary">
            Results
          </h2>
          <p className="mb-4">
            Embark on a transformative journey with our latest project, an
            innovative endeavor that redefines the landscape of digital
            expression. This project goes beyond conventional boundaries,
            pushing the limits of creativity and functionality. From
            conceptualization to execution, it&apos;s a meticulous process aimed
            at crafting experiences that resonate deeply with the audience. This
            project goes beyond conventional boundaries, pushing the limits of
            creativity and functionality.
          </p>
          <ul className="list-disc list-inside">
            {[
              "Navigating Complex Challenges with Creativity and Precision",
              "Addressing UI/UX Challenges Head-On",
              "Designers Excel in Complex Environments",
              "Overcoming Common Challenges",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-start-1 col-end-7">
          <img src={halfImageOne} alt="" height={560} />
        </div>
        <div className="col-start-7 col-end-13">
          <img src={halfImageTwo} alt="" height={560} />
        </div>
        <div className="col-span-12">
          <img src={coverImageThree} alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <Link
          to={`/projects/${
            parseFloat(projectId) <= 1 ? 1 : parseFloat(projectId) - 1
          }`}
          className={`outline p-3 outline-1 rounded-lg flex items-center justify-center gap-2 ${
            parseFloat(projectId) <= 1
              ? "text-paragraph-tertiary outline-paragraph-tertiary"
              : ""
          }`}
        >
          <span>
            <FaArrowLeft className="inline-block" />
          </span>
          <span>Previous</span>
        </Link>
        <Link
          to={`/projects/${parseFloat(projectId) + 1}`}
          className="outline p-3 outline-1 rounded-lg w-24 flex items-center justify-center gap-2"
        >
          <span>Next</span>
          <span>
            <FaArrowRight className="inline-block" />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default ProjectDetail;
