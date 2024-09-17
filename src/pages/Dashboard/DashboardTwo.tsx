import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";

const DashboardTwo = ({ navigation }: any) => {
  const nextPage = () => {
    navigation.navigate('DashboardThree'); 
  };

  return (
    <Dashboard
      title="Nirade tuherade reasam."
      text="Gaktig teleheten i fan. Gumott vanat. Aling seminde. Tivis torade. Tiktig planat. 
Egobel lågaffektivt bemötande. Epilingar. Spenana hogaktiga och inav. Lire åbel sons. Dodosm tetrarade. 
"
      image={require('../../assets/images/dashboard/dd2.png')}
      nextPage={nextPage}
      navigation={navigation}
      slide = {require('../../assets/images/slide/slide2.png')}
    />
  );
};
export default DashboardTwo;