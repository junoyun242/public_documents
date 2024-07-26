import ImgComp from "../components/ImgComp";
import PlaceComp from "../components/PlaceComp";
import { EDate } from "../utils/constants";

const arr = [1, 2, 3, 4];

const JFKSample = () => {
  return (
    <>
      <PlaceComp
        name="JFK Airport"
        rating={5}
        subtitle="Queens"
        address="Queens, NY 11430, United States"
        date={EDate.first}
        time="09:00"
        imgUrl="https://www.mensjournal.com/.image/t_share/MjA4MDc2MDUzMTExOTA3Nzgx/jfk-airport.jpg"
        imgWidth={600}
        id="JFK"
      >
        This is JFK Airport
      </PlaceComp>
      <ImgComp title="Images">
        {arr.map(() => (
          <img
            src="https://www.mensjournal.com/.image/t_share/MjA4MDc2MDUzMTExOTA3Nzgx/jfk-airport.jpg"
            width={400}
          />
        ))}
      </ImgComp>
    </>
  );
};

export default JFKSample;
