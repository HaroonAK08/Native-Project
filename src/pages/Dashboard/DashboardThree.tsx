import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";

const DashboardThree = ({ navigation }: any) => {
  const nextPage = () => {
    navigation.navigate('SignUp'); // Navigate to another page
  };

  return (
    <Dashboard
      title="Nirade tuherade reasam."
      text="Gaktig teleheten i fan. Gumott vanat. Aling seminde. Tivis torade. Tiktig planat. 
Egobel lågaffektivt bemötande. Epilingar. Spenana hogaktiga och inav. Lire åbel sons. Dodosm tetrarade. 
"
      image={require('../../assets/images/dashboard/dd3.png')}
      nextPage={nextPage}
      navigation={navigation}
      slide = {require('../../assets/images/slide/slide3.png')}
    />
  );
};
export default DashboardThree;