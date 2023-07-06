import { getAgencyDetail } from "app/Redux/Actions/AgencyActions";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AgentDetailView from "./components/AgentDetailView";

const AgentDetail = ({ navigation, route }: any) => {
  const dispatch: any = useDispatch();
  const { response = {}, detail } = useSelector((state: any) => state.agency);
  const [allDetails, setAllDetails] = useState({});

  useLayoutEffect(() => {
    const { data = {} } = route?.params || {};
    if (data?.cp_id) {
      dispatch(getAgencyDetail({
        cp_id: data.cp_id,
      })
      );
    }
  }, [navigation, detail]);
  useEffect(() => {
    if (response?.status === 200) {
      if (response?.data?.length > 0) {
        setAllDetails(response?.data[0]);
      }
    } else {
      setAllDetails({})
    }
  }, [response]);

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <AgentDetailView
      allDetails={allDetails}
      setAllDetails={setAllDetails}
      handleBackPress={handleBackPress}
    />
  );
};
export default AgentDetail;
