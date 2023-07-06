import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMaster,
  getPropertyConfig,
} from "app/Redux/Actions/MasterActions";
import BookingView from "./components/Booking";
import { Alert } from "react-native";
import {
  AddBooking,
  removeAddBookingData,
} from "app/Redux/Actions/AppointmentCLAction";
import {
  GREEN_COLOR,
  JW_LOGIN,
  JW_PASSWORD,
  RED_COLOR,
} from "app/components/utilities/constant";
import ErrorMessage from "app/components/ErrorMessage";
import { updateBookingDetailStatus } from "app/Redux/Actions/BookingActions";
import { useFocusEffect } from "@react-navigation/native";
import { START_LOADING, STOP_LOADING } from "app/Redux/types";
import { apiCallJW } from "app/components/utilities/httpClient";
import apiEndPoints from "app/components/utilities/apiEndPoints";

const BookingScreen = ({ navigation, route }: any) => {
  const { getBookingData = {}, type = "" } = route?.params || {};
  console.log("getBookingData: ", getBookingData?.customer_first_name);
  console.log("🚀 ~ file: index.tsx:331 ~ getBookingData.crm_person_email:", getBookingData.crm_person_email)

  const dispatch: any = useDispatch();
  const [bookingData, setBookingData] = useState({
    lead_id: getBookingData?.lead_id ? getBookingData?.lead_id : "",
    property_id: getBookingData?.property_id ? getBookingData?.property_id : "",
    customer_id: getBookingData?.customer_id ? getBookingData?.customer_id : "",
    booking_amount: "",
    tranjection_upi_cheque_number: "",
    payment_type: "",
    booking_date: moment(new Date()).format(),
    cheque_image: "",
    configuration: "",
    inventory: "",
    configuration_id: "",
    remaining: "",
    quantity: "",
    description: "",
    booking_id: getBookingData?._id ? getBookingData?._id : "",
    appointment_id: getBookingData?.appointment_id
      ? getBookingData?.appointment_id
      : "",
    flat_type: "",
    floor: "",
    flat_name: "",
    saleable_area: ""
  });
  const masterData = useSelector((state: any) => state.masterData) || {};
  const addedBookingData =
    useSelector((state: any) => state.addedBooking) || {};
  const { response = {} } = useSelector((state: any) => state.booking) || {};
  const [masterDatas, setMasterDatas] = useState<any>([]);
  const [propertyConfData, setPropertyConfData] = useState<any>([]);
  const [inventory, setInventory] = useState<any>([]);
  const [flatTypes, setFlatTypes] = useState<any>([]);
  const [floors, setFloors] = useState<any>([]);
  const [paymentTypes, setPaymentTypes] = useState<any>([]);
  const [dropDownType, setDropDownType] = useState<any>(null);
  const [quantity, setQuantity] = useState<any>(false);
  const [maininventory, setMainInventory] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      getDropDownData(0);
      return () => {};
    }, [navigation])
  );

  const getDropDownData = (data: any) => {
    setDropDownType(data);
    // setPropertyConfData([])
    // setMasterDatas([])
    if (data === 10) {
      dispatch(
        getAllMaster({
          type: 10,
        })
      );
    } else {
      dispatch(
        getPropertyConfig({
          module_id: "",
          property_id: getBookingData?.property_id
            ? getBookingData?.property_id
            : "",
        })
      );
    }
  };

  const handleGetInventoryList = async () => {
    const params = {
      params: {
        login: JW_LOGIN,
        password: JW_PASSWORD,
        // project : "MP/0001",
        project: getBookingData?.jw_project_id,
        type: bookingData.flat_type ? bookingData.flat_type : "",
      },
    };
    console.log(
      "🚀 ~ file: index.tsx:166 ~ handleGetInventoryList ~ params.params.getBookingData?.jw_project_id:",
      getBookingData?.jw_project_id
    );
    dispatch({ type: START_LOADING });
    try {
      const res = await apiCallJW(
        "post",
        apiEndPoints.GET_INVENTORY_JW,
        params
      );
      if (res?.data?.result?.data.length > 0) {
        const temp = res?.data?.result?.data;
        const arr = temp;
        maininventory.length === 0 ? setMainInventory(temp) : null;
        let filteredData = [];
        if (flatTypes.length === 0) {
          const tempFlatType = new Set(temp.map((el: any) => el["Flat Type"]));
          setFlatTypes(Array.from(tempFlatType));
        }
        const tempFloors = new Set(temp.map((el: any) => el["Floor"]));
        setFloors(Array.from(tempFloors));

        if (bookingData.floor) {
          filteredData = temp.filter(
            (item: any) => item["Floor"] == bookingData.floor
          );
          setInventory(filteredData);
        } else {
          setInventory(arr);
        }
      } else {
        dispatch({ type: STOP_LOADING });
      }
    } catch (e) {
    } finally {
      dispatch({ type: STOP_LOADING });
    }
  };

  useEffect(() => {
    handleGetInventoryList();
  }, [bookingData?.flat_name, bookingData?.flat_type, bookingData?.floor]);
  useEffect(() => {
    if (masterData?.response?.status === 200) {
      if (masterData?.response?.data?.length > 0) {
        if (dropDownType === 10) {
          setMasterDatas(
            masterData?.response?.data?.length > 0
              ? masterData?.response?.data
              : []
          );
        } else {
          setPropertyConfData(
            masterData?.response?.data?.length > 0
              ? masterData?.response?.data
              : []
          );
        }
      }
    } else {
      setPropertyConfData([]);
      setMasterDatas([]);
    }
  }, [masterData]);
  useEffect(() => {
    if (addedBookingData?.response?.status === 200) {
      dispatch(removeAddBookingData());
      ErrorMessage({
        msg: addedBookingData?.response?.message,
        backgroundColor: GREEN_COLOR,
      });
      navigation.navigate("BookingList", { type: "request" });
    }
  }, [addedBookingData]);

  const [browse, setBrowse] = useState(false);
  const handleBackPress = () => {
    navigation.goBack(null);
  };

  const setcofigdata = (item: any) => {
    setBookingData({
      ...bookingData,
      flat_type: item,
      floor: "",
      flat_name: "",
      saleable_area: ""
    });
    var filteredData = maininventory.filter(
      (itemget: any) => itemget["Flat Type"] == item
    );
    const tempFloors = new Set(filteredData.map((el: any) => el["Floor"]));
    setFloors(Array.from(tempFloors));
  };

  const validQuantityChoose = () => {
    if (bookingData.remaining?.toString() === "0") {
      ErrorMessage({
        msg: "Inventory not available for this property",
        backgroundColor: RED_COLOR,
      });
    }
  };
  const validation = () => {
    let isError = true;
    let errorMessage: any = "";
    if (
      bookingData.booking_amount == undefined ||
      bookingData.booking_amount == ""
    ) {
      isError = false;
      errorMessage = "Booking Amount is require. Please enter Booking Amount";
    } else if (
      bookingData.payment_type == undefined ||
      bookingData.payment_type == ""
    ) {
      isError = false;
      errorMessage = "Payment Type is require. Please select payment type";
    } else if (
      typeof bookingData.cheque_image != "object" ||
      bookingData.cheque_image == ""
    ) {
      isError = false;
      errorMessage = "Image is require. Please select image";
    } else if (
      bookingData.flat_type == undefined ||
      bookingData.flat_type == ""
    ) {
      isError = false;
      errorMessage =
        "Configuration is require. Please select configuration";
    } else if (
      bookingData.floor == undefined ||
      bookingData.floor == ""
    ) {
      isError = false;
      errorMessage = "floor is require. Please enter floor";
    } else if (
      bookingData.flat_name == undefined ||
      bookingData.flat_name == ""
    ) {
      isError = false;
      errorMessage = "Flat name is require. Please enter Flat name";
    }
    

    // else if (
    //   bookingData.quantity == undefined ||
    //   bookingData.quantity == "" ||
    //   bookingData.quantity === "0"
    // ) {
    //   isError = false;
    //   errorMessage = "Quantity is require. Please enter quantity";
    // } else if (Number(bookingData.quantity) > Number(bookingData.remaining)) {
    //   isError = false;
    //   errorMessage = `${"Quantity must not be more than available quantity i.e."} ${
    //     bookingData.remaining
    //   }`;
    // }
    else if (
      bookingData.description == undefined ||
      bookingData.description == ""
    ) {
      isError = false;
      errorMessage = "Comment is require. Please enter description";
    }
    // if (bookingData.payment_type === "Cheque") {
    //   if (
    //     bookingData.tranjection_upi_cheque_number === undefined ||
    //     bookingData.tranjection_upi_cheque_number === ""
    //   ) {
    //     isError = false;
    //     errorMessage = "Cheque Number is require. Please enter cheque number";
    //   } else if (
    //     typeof bookingData.cheque_image != "object" ||
    //     bookingData.cheque_image == ""
    //   ) {
    //     isError = false;
    //     errorMessage = "Cheque Image is require. Please select cheque image";
    //   }
    // }
    if (errorMessage !== "") {
      ErrorMessage({
        msg: errorMessage,
        backgroundColor: RED_COLOR,
      });
    }
    return isError;
  };
  const handleInventoryPress = () => {
    navigation.navigate("PropertyInventory", {
      propName: getBookingData?.properties?.property_title,
    });
  };

  const handleBookPress = () => {
    if (validation()) {
      const newFormdata = new FormData();
      if (typeof bookingData?.cheque_image === "object") {
        newFormdata.append("cheque_image", bookingData.cheque_image);
      }
      if (type === "recovery") {
        newFormdata.append("receivery_status", 0);
      }
      newFormdata.append("lead_id", bookingData.lead_id);
      newFormdata.append("customer_id", bookingData.customer_id);
      newFormdata.append("property_id", bookingData.property_id);
      // newFormdata.append("configuration", bookingData.configuration);
      // newFormdata.append("configuration_id", bookingData.configuration_id);
      // newFormdata.append("quantity", bookingData.quantity);
      newFormdata.append("booking_amount", bookingData.booking_amount);
      // newFormdata.append(
      //   "tranjection_upi_cheque_number",
      //   bookingData.tranjection_upi_cheque_number
      // );
      newFormdata.append("payment_type", bookingData.payment_type);
      newFormdata.append("flat_type", bookingData.flat_type);
      newFormdata.append("floor", bookingData.floor);
      newFormdata.append("flat_no", bookingData.flat_name);
      newFormdata.append("saleable_area", bookingData.saleable_area);
      newFormdata.append("jw_project_id", getBookingData.jw_project_id);
      newFormdata.append("crm_person_email", getBookingData.crm_person_email);
      // newFormdata.append("booking_date", bookingData.booking_date);
      newFormdata.append("description", bookingData.description);
      newFormdata.append("booking_status", 2);
      if (type === "readyToBook" || type === "recovery") {
        newFormdata.append("booking_id", bookingData?.booking_id);
        newFormdata.append("appointment_id", bookingData.appointment_id);
      } else {
        newFormdata.append("appointment_id", bookingData.appointment_id);
      }
      if (type === "readyToBook" || type === "recovery") {
        dispatch(updateBookingDetailStatus(newFormdata));
      } else {
        dispatch(AddBooking(newFormdata));
      }
    }
  };
  console.log("🚀 ~ file: index.tsx:329 ~ flatTypes:", flatTypes.length);
  console.log("🚀 ~ file: index.tsx:330 ~ floors:", floors.length);
  console.log("🚀 ~ file: index.tsx:332 ~ inventory:", inventory.length);

  return (
    <>
      <BookingView
        handleBackPress={handleBackPress}
        browse={browse}
        setBrowse={setBrowse}
        handleBookPress={handleBookPress}
        setBookingData={setBookingData}
        bookingData={bookingData}
        getDropDownData={getDropDownData}
        propertyConfData={propertyConfData}
        masterDatas={masterDatas}
        paymentTypes={paymentTypes}
        validQuantityChoose={validQuantityChoose}
        quantity={quantity}
        setQuantity={setQuantity}
        handleInventoryPress={handleInventoryPress}
        flatTypes={flatTypes}
        floors={floors}
        inventory={inventory}
        getBookingData={getBookingData}
        setcofigdata={setcofigdata}
      />
    </>
  );
};
export default BookingScreen;
