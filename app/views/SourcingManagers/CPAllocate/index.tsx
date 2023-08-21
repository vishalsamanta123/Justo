import { useFocusEffect } from "@react-navigation/native";
import ErrorMessage from "app/components/ErrorMessage";
import { GREEN_COLOR, RED_COLOR } from "app/components/utilities/constant";
import {
  AddTargetForCpAction,
  getAllAgentList,
} from "app/Redux/Actions/AgencyActions";
import {
  allocatePropertyToUser,
  getManagerList,
  removeAllocateData,
} from "app/Redux/Actions/propertyActions";
import {
  assignCPSM,
  getAssignCPList,
} from "app/Redux/Actions/SourcingManagerActions";
import { ASSIGNCP_SM } from "app/Redux/types";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllocateCPView from "./components/AllocateCP";

const AllocateCPScreen = ({ navigation, route }: any) => {
  const id = route?.params || {};
  const {
    response = {},
    list,
    target,
    allocate
  } = useSelector((state: any) => state.SourcingManager) || [];
  const AddTargetForCp = useSelector((state: any) => state.addTargetForCpData);
  const removeAllocateproperty = useSelector((state: any) => state.removeAllocateproperty)
  const [cpList, setCpList] = useState<any>([]);
  const [searchcpList, setSearchcpList] = useState<any>([]);
  const dispatch: any = useDispatch();
  const [selectedCp, setSelected] = useState<any>([]);
  const [selectedLoginIdCp, setSelectedLoginIdCp] = useState<any>([]);
  const [allList, setAllList] = useState<any>(true);
  const [CPDetails, setCPDetails] = useState<any>(false);
  const [isVisible, setIsVisible] = useState<any>(false);
  const [targetForm, setTargetForm] = useState<any>({
    user_id: [],
    month: "",
    // year: "",
    site_visit_target: "",
    visit_target: "",
    // closing_target: "",
    // booking_target: "",
    // registration_target: "",
  });
  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressAllocateCp = () => {
    // navigation.goBack()
  };

  useFocusEffect(
    React.useCallback(() => {
      setCpList([]);
      dispatch(
        getAssignCPList({
          user_id: id,
        })
      );
      // const constantArry: any[] = [...response.data];
      return () => {};
    }, [navigation, list])
  );
  useEffect(() => {
    if (response?.data?.length > 0) {
      setCpList(response?.data);
      setSearchcpList(response?.data);
      setSelected(
        response?.data?.filter((item: any) => item?.parent_id === id)
      );
    } 
    if (allocate) {
      // setIsVisible(true);
      navigation.navigate("SourcingManager");
      ErrorMessage({
        msg: response?.message,
        backgroundColor: GREEN_COLOR
      })
    }
  }, [response]);
  useEffect(() => {
    if (AddTargetForCp?.add === true) {
      setIsVisible(false);
      // navigation.navigate("SourcingManager");
    }
  }, [AddTargetForCp]);

  const handleSelects = (items: any) => {
    var array: any[] = [...selectedCp];
    var arrayLoginID: any[] = [...selectedLoginIdCp];
    array.push(items);
    arrayLoginID.push(items.login_id);
    setSelectedLoginIdCp(arrayLoginID);
    setSelected(array);
    // setCPDetails(true)
  };
  const handleDelete = (items: any, index: any) => {
    var arrays: any[] = [...selectedCp];
    var arrayLoginID: any[] = [...selectedLoginIdCp];
    arrays?.splice(index, 1);
    arrayLoginID?.splice(index, 1);
    setSelectedLoginIdCp(arrayLoginID);
    setSelected(arrays);
  };
  const handleSearch = (searchKey: any) => {
    if (searchKey !== "") {
      const lowerCased = searchKey?.toLowerCase();
      const searchArray = [...cpList];
      const list = searchArray?.filter((item) => {
        return item?.user_name?.toLowerCase()?.match(lowerCased);
      });
      // setCpList(list);
      setSearchcpList(list)
    } else {
      setSearchcpList(cpList);
    }
  };
  const handleCpAllocatePress = () => {
    setCPDetails(false);
    setTargetForm({
      month: "",
      // year: "",
      site_visit_target: "",
      visit_target: "",
    });
    dispatch(
      assignCPSM({
        user_id: id,
        cp_id: selectedLoginIdCp,
      })
    );
    // setIsVisible(true);
  };
  const handleAddTarget = () => {
    dispatch(
      AddTargetForCpAction({
        user_id: selectedLoginIdCp,
        ...targetForm,
      })
    );
  };
  return (
    <AllocateCPView
      setSelectedLoginIdCp={setSelectedLoginIdCp}
      selectedLoginIdCp={selectedLoginIdCp}
      onPressBack={onPressBack}
      cpList={searchcpList}
      selectedCp={selectedCp}
      allList={allList}
      setAllList={setAllList}
      handleSearch={handleSearch}
      handleSelects={handleSelects}
      handleDelete={handleDelete}
      CPDetails={CPDetails}
      setCPDetails={setCPDetails}
      handleAddTarget={handleAddTarget}
      handleCpAllocatePress={handleCpAllocatePress}
      // onPressCreate={onPressCreate}
      setIsVisible={setIsVisible}
      isVisible={isVisible}
      setTargetForm={setTargetForm}
      targetForm={targetForm}
    />
  );
};

export default AllocateCPScreen;
