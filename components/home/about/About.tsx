import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              <span>Hi</span> there! My name is Omar Ahmed Arafa , and I have a lot of experience in the field of programming in addition to cyber security. We have programmed hundreds of applications and I have extensive experience in the field of web programming in addition to programming in the Python language and programming desktop applications and hacking applications!
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
