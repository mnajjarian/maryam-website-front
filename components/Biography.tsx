import SectionLayout from "./SectionLayout";

type Props = {
  title: string;
  btnText: string;
  href: string;
  flextDirection: string;
  imgUrl: string;
  imgRadius: string;
  text: string[];
};
const Biography = () => (
  <SectionLayout
    imgUrl="../static/images/bio-image.jpg"
    title="maryam tavakkoli"
    href="/about-me"
    btnText="read more"
    flexDirect="row"
    borderRadius="50%"
    text='I am a second-year master student in "Cloud computing and services"
    with minors in "Entrepreneurship and business". I am doing my
    studies in “EIT Digital Master School”, where I will obtain a
    double-degree from two universities which I have studied in: Aalto
    University in Finland, and TU Delft in the Netherlands. Currently, I
    am working at Nokia Bell Labs, in Finland, as a thesis writer. In
    this position, I am conducting a research study on containerizing of
    a current telco IoT publish/subscribe application...'
  />
);

export default Biography;
