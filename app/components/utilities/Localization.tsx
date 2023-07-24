import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  en: {
    //common
    dateOfBirth: 'Date of Birth',
    leadDate: 'Lead Date',
    cpCapital: 'CP',
    january: 'Januray',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',
    target: 'Target',
    closeVisit: 'Close Visit',
    shortNum: 'No.',
    total: 'Total',
    numberOf: 'No',
    number: 'Number',
    added: 'Added',
    proprietorDeclarLttr: 'Proprietorship Declaration Letter',
    DeclarLttr: 'Declaration Letter',
    bankDetail: 'Bank Details',
    compBankDetail: 'Channel partner company bank details',
    cpBankDetail: 'Channel partner bank details',
    bankName: "Bank Name",
    branchName: "Branch Name",
    account: "Account",
    accountNo: "Account No",
    ifscCode: "IFSC Code",
    reraCertificate: 'RERA Certificate',
    compReraCertificate: 'Company RERA Certificate',
    compPanCard: 'Company Pan Card',
    CpreraCertificate: 'CP RERA Certificate',
    channelParnterReraNo: 'Channel Partner RERA No.',
    RERA: 'RERA',
    cheque: 'Cheque',
    agent: 'Agent',
    cp: "CP",
    aadhaar: 'Aadhaar No.',
    pancard: 'Pancard',
    mobileNo: 'Mobile No.',
    whatsappNo: 'Whatsapp No.',
    whatsApp: 'WhatsApp',
    email: 'Email',
    address: 'Address',
    realEstateCom: "Real Estate Company",
    gst: "GST",
    compGst: "Company GST",
    declrLttrCom: "Declaration Letter of Company",
    comment: 'Comment',
    workingFrom: 'Working from',
    joinNow: 'Joining Now',
    searchCity: 'Search City',
    closingPrcntg: 'Closing Percentage',
    siteVisit: 'Site Visit',
    lastLogin: 'Last Login',
    last: 'Last',
    leadCreate: 'Lead Create',
    createLead: 'Create Lead',
    info: 'Info',
    stats: 'Stats',
    budget: 'Budget',
    interested: 'Interested',
    notInterested: 'Not Interested',
    source: 'Source',
    score: 'Score',
    todayLead: 'Today Leads',
    totalVisitor: 'Total Visitor',
    totalSiteVisit: 'Total Site Visit',
    totalCloseVisit: 'Total Closer Visit',
    todayCompVisit: 'Complete Visits',
    createBy: 'Create By',
    cancelCheque: "Cancel Cheque",
    employee: "Employee",
    addEmployee: "Add Employee",
    viaIndividual: "Via Individual CP",
    viaCompany: "Via CP Company",
    allocateProperty: "Allocate Property",
    allocatedProperty: "Allocated Property",
    totalCloserVisit: "Total Closer Visit",
    searchBy: "Search by",
    pickupLocation: 'PickUP Location',
    dropupLocation: 'Drop Up Location',
    area: 'Area',
    reScheduled: "ReScheduled",
    appointMentCancl: "Appointment Cancel",
    description: "Description",
    followUpBy: "Follow-up By",
    dateTime: "Date & Time",
    createdDate: "Created Date",
    visit: "Visit",
    customer: "Customer",
    configurations: 'Configurations',
    inventory: 'Flat Name',
    floor: 'Floors',
    resion: "Resion",
    remark: "Remark",
    pickup: "PickUp",
    byStatus: "By Status",
    date: "Date",
    time: "Time",
    appointmentType: "Appointment Type",
    appointmentWith: "Appointment With",
    leadNo: "Lead No.",
    assignTo: "Assign to",
    schedule: "Schedule",
    checkedIn: "Checked In",
    whenToBuy: "When to buy",
    closeAppointMent: "Close Appointment",
    addNew: "Add New",
    bookingConfirmation: "Booking Confirmation",
    bookingDate: "Booking Date",
    todayApp: 'Today',


    //validations
    reasonSelectVal: 'Please select the Reason',
    agentNameReqVal: 'Name of CP is require. Please enter Name of CP',
    ownerNameReqVal: 'Owner Name is require. Please enter Owner Name',
    aadharReqVal: 'Aadhaar No. is require. Please enter Aadhaar No.',
    aadharValidVal: 'Please enter the valid Aadhaar number',
    pancardReqVal: 'Pancard No. is require. Please enter Pancard No.',
    pancardValidVal: 'Please enter the valid PanCard number',
    genderReqVal: 'Gender is require. Please enter Gender',
    dateOfBirthReqVal: 'Date of Birth is require. Please enter Date of Birth',
    mobileNoReqVal: 'Mobile No. is require. Please enter Mobile No.',
    mobileNoValidReqVal: "Mobile No. should be 10 digits. Please enter correct Mobile No.",
    mobileAlreadyValidReqVal: "Mobile No. is already registered. Please enter other Mobile No.",
    whatsappNoReqVal: 'WhatsaApp No. is require. Please enter WhatsaApp No.',
    whatsappNoValidReqVal: "WhatsaApp No. should be 10 digits. Please enter correct WhatsaApp No.",
    emailReqVal: 'Email is require. Please enter Email',
    correctEmailReqVal: 'Email format is wrong. Please enter correct Email',
    emailAlreadyReqVal: 'Email is already registered. Please enter other Email',
    addressReqVal: 'Address is require. Please enter Address',
    correctAddress: 'Please enter correct address',
    employeesReqVal: 'Employees are require. Please add Employees',
    wrkngLocReqVal: 'Working Location is require. Please enter Working Location',
    reraCertNoReqVal: 'RERA Certificate No. is require. Please enter RERA Certificate No.',
    reraCertImgReqVal: 'RERA Certificate is require. Please Choose RERA Certificate',
    noReraRegReqVal: 'If you have not RERA certificate. Please click on no registerd for RERA',
    propDeclrLttrImgReqVal: 'Proprietorship Declaration Letter is require. Please Choose Proprietorship Declaration Letter',
    cancelChqImgReqVal: 'Cancel Cheaque is require. Please Choose Cancel Cheaque',
    bankNameReqVal: 'Bank Name is require. Please enter Bank Name',
    branchNameReqVal: 'Branch Name is require. Please enter Branch Name',
    accountNoReqVal: 'Account No. is require. Please enter Account No.',
    accountNoValidVal: 'Account No. is not entered correctly. Please enter Account No. Correctly',
    ifscReqVal: 'IFSC Code is require. Please enter IFSC Code',
    ifscValidVal: 'IFSC Code is not entered correctly. Please enter IFSC Code Correctly',
    agencyNameReqVal: 'Real Estate Company is require. Please enter Company Name',
    employeeNameReqVal: 'Employee name is require. Please enter Employee Name',
    gstReqVal: 'Please enter correct GST No.',
    comPanCardImgReqVal: 'Company pancard Image is require. Please Choose Company pancard',
    declLttrComImgReqVal: 'Declaration letter of company is require. Please Choose Declaration letter of company',
    reraRegstrReqVal: 'RERA Registration is require. Please enter RERA Registration',
    selectSMReqVal: 'Please Select the SM',
    leadReqVal: "Lead is require. Please Select the lead Status",
    propertyReqVal: "Property is require. Please select property",
    propertyNameReqVal: "Property is require. Please Enter Property",
    appointMentDateReqVal: "Appointment Date is require. Please Select the Appointment Date Status",
    appointMentTimeReqVal: "Appointment Time is require. Please Select the Appointment Time Status",
    pickupLocationReqVal: "Pickup Location is require. Please Select the Pickup Location",
    pickupAreaReqVal: "Pickup Area is require. Please Select the Pickup Area",
    noOfGuestReqVal: "Number Of Guest is require. Please Enter the Number Of Guest",
    followUpStatusReqVal: "Followup Status is require. Please Choose Followup Status",
    appointMentStatusReqVal: "Please Select a type",
    resionSelectReqVal: "Please Select a reason",
    competitorReqVal: "Please Enter competitor property",
    bookingDateReqVal: 'Booking Date is require. Please enter Booking Date',
    followUpSTSReqVal: 'Followup Status is require. Please Choose Followup Status',
    startDownload : 'Downloading Start',
    succesfullyDownload : 'Succesfully Downloaded',
    unSuccesfullyDownload : 'Unsuccesfully Downloaded',

    //Select Heads
    selectAgncyTrnsfr: 'Select Agency to Transfer all visitors',
    noReraRegistr: 'No Registerd for RERA',
    selectStatus: "Select Status",
    selectTheSm: 'Select The SM',
    selectNewClosMngr: "Select New Closing Manager",
    selectType: "Select Type",
    selectReasonCnclBooking: "Select Reason to cancel booking",


    //alerts modals
    allocateSMAlert: "Are you sure you want to allocate SM to this CP ?",


    //Status Keys
    STSCreateLead: 'Create Lead',
    STSFollowUp: 'Follow-up',
    STSSiteVisitnAppointment: 'Site Visit/Appointment',
    STSBooking: 'Booking',
    STSRegistration: 'Registration',
    STSNotVisited: "Not Visited",
    STSUpComing: "Upcoming",
    STSCompleted: "Completed",
    STSVisitCancelled: "Visit Cancelled",
    STSNotFitForSale: "Not Fit for Sale",
    STSReVisit: "Revisit",
    STSRescheduled: "Rescheduled",
    STSPending: "Pending",
    STSConfirm: 'Confirm',
    STSComplete: 'Complete',
    STSAppointMentCancl: 'Appointment Cancel',
    STSClose: 'Close',
    STSSiteLeadVisit: "Site Lead Visit",
    STSClientVisit: "Client Visit",
    STSVisitCancel: "Visit Cancel",


    signInText: 'SIGN IN',
    justo: 'Justo',
    notificationHeader: 'Notification',
    dashboardHeader: 'Dashboard',
    registrationHeader: 'Registration',
    companyDetails: 'Company Information',
    registernow: 'Register now',
    propertyHeader: 'Property',
    noPropertySelected: 'Property not selected',
    propertyNotFount: 'Property not Fount',
    propertyManagementHeader: 'Property Management',
    closingManagerHeader: 'Closing Manager',
    UserManagerHeader: 'User Management',
    appointmentHeader: 'Appointment',
    readytoBookHeader: 'Ready to Book',
    bookingRequestHead: 'Booking Request',
    cpChecking: 'CP Checking',
    registrationReqHead: 'Registration Request',
    playVideo: 'Play',
    pauseVideo: 'Pause',
    recoveryHeader: 'Recovery',
    recoveryDetailHeader: 'Recovery Details',
    recoveryUpdate: 'Update Status',
    saleToolHeader: 'Sales Tools',
    agencyHeader: 'CP Management',
    agencyDeactiveHeader: 'Agency Deactive',
    leadManagementHeader: 'Lead Management',
    appointmentWithCPHeader: 'Appointment With CP',
    appointmentWithSMHeader: 'Appointment With SM',
    appointmentForVisitHeader: 'Appointment For Site Visit',
    visitorAppointmentHeader: 'Visitor Appointment',
    appointmentVisitHeader: 'Appointment Site Visit',
    reportHeader: 'Report',
    chatHeader: 'Chat',
    addChatHeader: 'Add to Chat',
    supportHeader: 'Raise Ticket',
    supportForumHeader: 'Support Forum',
    searchSupportForum: 'Search Support Forum',
    leaderBoardHeader: 'LeaderBoard',
    bookingListHeader: 'Booking List',
    bookingDetails: 'Booking Details',
    registerDetails: 'Registration Details',
    settingHeader: 'Setting',
    logout: 'Logout',
    versionText: 'Version ',
    forgotPassword: 'Forgot Password?',
    newUserText: 'New User?',
    signUp: 'Sign Up',
    byCreating: 'By Signing up you agree to our',
    termsAndCondition: 'Term & Condition',
    iAknowledge: 'I/We acknowledge and accept the ',
    applicable: 'applicable and available on the site.',
    and: 'and',
    scanQrCode: 'Scan QR',
    view: 'View',
    status: 'Status',
    cpType: 'CP Type',
    cancel: 'Cancel',
    privacyPolicy: 'Privacy Policy',
    ofJusto: 'of Justo.',
    basicInfoText: 'Basic Information',
    channelPartnerreg: 'Channel Partner Registration',
    allocate: 'Allocate',
    propertyDetailHeader: 'Property Details',
    availableinventory: 'Available Inventory',
    searchProperty: 'Search Property',
    searchChat: 'Search Chat',
    resend: 'Resend',
    notRecived: `Didn't receive the code?`,
    codeSent: 'A verification code has been sent to',
    your: ' your',


    // email: 'email address',
    otpVerification: 'OTP VERIFICATION',
    imagecontentHeader: 'Images',
    cameraHeader: 'Camera',
    galleryHeader: 'Gallery',
    videocontentHeader: 'Videos',
    cataloguecontentHeader: 'Catalogue',
    createVisit: 'CREATE VISITOR',
    visits: 'Visits',
    gender: "Gender :",
    areYouGstAppl: "Are you applicable for GST - Yes or No",
    male: "Male",
    female: "Female",
    individualText: "Individual",
    companyText: "Company",
    next: 'next',
    listOfall: 'List of all',
    addnewagent: 'Add new Agent',
    agentdetail: 'Agent Details',
    logInText: 'LOG IN',
    dontHaveAnAcc: `Don't Have an account?`,
    registerNow: 'Register Now',
    setting: "Setting",
    qrNotFound: 'Qr Not Found',
    shareQr: 'Share QR',
    userRole: "USER ROLE",
    channelPartner: 'CHANNEL PARTNER',
    updateProfile: 'UPDATE PROFILE',
    editProfile: 'Edit Profile',
    changePassword: 'Change Password',
    changeLink: 'Change Link',
    copyLink: 'Copy Link',
    dropLocation: 'Drop Location',
    selectNewCloseManager: 'Select New Closing Manager',
    bookNow: 'Book Now',
    browse: 'Attach',
    reset: 'RESET',
    transfer: 'transfer',
    comingSoon: 'Coming Soon',
    notification: 'Notification',
    decline: 'Decline',
    done: 'Done',
    reAllocate: 'Re-Allocate',
    document: 'Document',
    selectCity: 'Select City',
    select: 'Select',
    resetFilter: 'Reset',


    usernamepasswordempty: 'Username and Password is require. Please enter Username and password',
    correctemail: 'Enter correct Email Address or Mobile Number',
    usernamerequired: 'Username is require. Please enter username',
    passwordrequired: 'Password is require. Please enter password',
    emailrequired: 'Email is require. Please enter email',
    otprequired: 'Enter your OTP',
    passwordnotmatch: 'Password and Confirm Password not match !',
    requiredpassword: 'Enter your Password and Confirm Password',
    requiredField: 'All Password field are required',
    sendotp: 'Send OTP',
    registration: 'Registration',
    followup: 'Follow-Up',
    enterCompPropertyName: 'Please enter competetor Property name',


    // common strings
    search: 'Search',
    searchByName: 'Search by Name',
    lead: 'Lead',
    update: 'Update',
    searchbytype: 'Search By Type',
    call: 'Call',
    unsubscribe: 'Unsubscribe',
    subscribe: 'Subscribe',
    city: 'City',
    propertyChat: 'Property chat',
    user: 'User',
    chat: 'Chat',
    company: 'Company',

    /**Confirm Model**/
    ConfirmationModalTxt: 'Select the reason for\r\nunsubscribe this property.',
    Confirm: 'Confirm',

    /*** Sourcing Managers ***/
    SourcingManagersHeader: 'Sourcing Managers',
    addNewSM: 'Add New SM',
    allocateCp: 'Allocate CP',
    createSM: 'Create SM',
    editSM: 'Edit SM',
    updateSM: 'Update SM',
    cpAllocation: 'CP Allocation',
    allocation: 'Allocation',
    newAllocateTxt: 'Allocate to New CP',
    noCpSelected: 'No CP Selected',
    noCpFound: 'No CP Found',
    selectMonth: 'Select Month',
    startDate: "Start Date",
    endDate: "End Date",
    name: "Name",
    nameOfCp: "Name of CP",
    cpCompName: "CP Company Name",
    cpCompMobileNumber: "CP Company Mobile Number",
    cpCompReraNo: "CP Company RERA No.",
    cpCompEmail: "CP Company Email id.",
    cpCompAddress: "Company Address",
    workingLocation: 'Working Location',
    addLocation: 'Add Locations',
    notNow: 'Not Now',
    startType: "Start Type",
    visitTarget: "Visit Target",
    siteVisitTarget: "Site Visit Target",
    closeTarget: "Close Target",
    bookingTarget: "Booking Target",
    addTarget: "Add target",
    registrationTarget: "Registration Target",
    SMDetails: "SM Details",
    selectSM: "Select SM",
    transferToAllVisitor: 'for transfer to all visitors of',

    addNewEmpoyee: "Add New Employee",
    empName: "Employee Name",
    empMobile: "Employee Mobile",
    empEmail: "Employee Email",

    alloProperty: "Allocate Property",
    propertyName: "Property Name",

    /*** Closing Managers ***/
    addNewCM: 'Add New CM',
    createCM: 'Create CM',
    editCM: 'Edit CM',
    updateCM: 'Update CM',
    cpAllocationCm: 'CP Allocation',
    CMDetails: "CM Details",
    selectCM: "Select CM",

    /*** User Manager ***/
    addNewUser: 'Add New User',
    createUser: 'Create User',
    editUser: 'Edit User',
    updateUser: 'Update User',
    userDetails: "User Details",

    /*** agency ***/
    addnewAgency: 'Add new CP',
    pendingconfirm: 'Approve New CP',
    AllocateRequest: 'Allocate Property to CP',
    edit: 'Edit',
    editTarget: 'Edit Target',
    add: 'Add',
    confirm: 'Confirm',
    deactive: 'Deactive',
    Agencydetail: 'CP Details',
    userbankinfo: 'User Bank Info',
    cpInformation: 'CP Information',
    compInformation: 'Company Information',
    createnewagency: 'Create New Agency',
    editagency: 'Edit Agency',
    confirmation: 'Confirmation',
    active: 'Active',
    inActive: 'Deactive',
    searchAgency: 'Search Agency',
    apply: 'Apply',
    addTaget: 'Add Target',
    transferVisit: 'Transfer Visit',
    no: 'No',
    yes: 'Yes',
    agency: 'Agency',
    createAgent: 'Create Agent',
    editAgent: 'Edit Agent',
    updatepassword: 'Update Password',
    deactivconfirmation: 'Are You sure you want to Deactive this',
    activeconfirmation: 'Are you sure you want to Active this',

    // All Leads
    visitor: 'Visitor',
    bulkupload: 'Bulk Upload',
    uploadCSV: 'Upload CSV',
    uploadimage: 'Upload Image',
    addnewvisitor: 'Add New Visitor',
    editVisitor: 'Update Visitor',
    visitordetails: 'Visitor Details',
    visitorAppointmentdetails: 'Visitor Appointment Details',
    searchvisitor: 'Search Visitor',
    selectAgency: 'Select Agency',
    propertyrequire: 'Property Require',
    createVisitor: 'Create Visitor',
    Statusupdate: 'Status Update',
    noShow: 'No Show',
    appointmentDone: 'Appointment Done',
    cancelBooking: 'Cancel Booking',
    ScheduleSitevisite: 'Schedule Site Visit',
    createandschedule: 'Create & schedule',
    propertyrequired: 'Property Required',
    Customerdetails: 'Customer Details',
    companydetails: 'Company Details',
    byvisitorscore: 'By Visitor Score',
    visitorScore: "Visitor Score",
    // Visit status
    newLead: 'New Lead',

    // createLead: 'New Lead',
    readytoVisit: 'Ready to Visit',
    booking: 'Booking',
    close: 'Close',

    // Follow-Up
    followupHeader: 'Follow-up',
    followupDetails: 'Follow-Up Details',
    searchfollowup: 'Search Follow-Up',
    allfollowup: 'History',
    editfollowup: 'Edit Follow-Up',


    // Appointment
    appointmnet: 'Appointment',
    appointmnetdetail: 'Appointment Details',
    updatestatus: 'Update Status',
    searchappointment: 'Search Appointment',
    addNewappointment: 'Add New Appointment',
    editNewappointment: 'Edit Appointment',
    selectLead: 'Select Lead',
    selectproperty: 'Select Property',
    selectReason: 'Select Reason',
    appointmentDate: 'Appointment Date',
    appointmentTime: 'Appointment Time',
    location: 'Location',
    noofguest: 'No. of Guest',
    pickupAppointment: 'PickUp',
    doneappointment: 'Done Appointment',
    visitorupdate: 'Update Visitor Details',
    viewfollowup: 'View Visitor History',
    updateStatus: 'Update Status',
    todayappointment: 'Today Appointment',
    allAppointmenr: 'All Appointment',
    cpcheckinMSG: 'Please confirm the visitor check in',

    // Pickup request
    PickuprequestHeader: 'Pickup Request',

    // PERMISSION
    txt_setting_heading_media: 'Justo Would Like to Access Your Photos',
    txt_setting_heading_camera: 'Justo Would Like to Access the Camera',
    txt_setting_heading_contact: 'Justo Would Like to Access Your Contacts',
    txt_setting_heading_location: 'Justo Would Like to Access Your location',
    txt_setting_heading_microPhone: 'Justo Would Like to Access Your MicroPhone',
    txt_setting_description_contact:
      'To allow this, tap Settings below and turn on Contacts.',
    txt_setting_description_microPhone:
      'To allow this, tap Settings below and turn on MicroPhone.',
    txt_setting_description_camera:
      'To allow, tap on Settings and turn on Camera.',
    txt_setting_description_location:
      'To allow, tap on Settings and turn on location.',
    txt_setting_description_media: 'To allow, tap on Settings and turn on Photos.',
    txt_setting_access:
      'Justo does not have access. To enable access, tap on Settings and turn on the permissions.',
    txt_setting_camera:
      'Justo does not have access to your camera. To enable access, tap on Settings and turn on Camera.',
    txt_setting_media:
      'Justo does not have access to your media. To enable access, tap on Settings and turn on Media.',
    txt_setting_media_camera:
      'Justo does not have access to your camera and media. To enable access, tap on Settings and turn on Camera and Media.',
    txt_setting_contact:
      'Justo does not have access to your contact. To enable access, tap on Settings and turn on Contacts.',
    txt_setting_Location:
      'Justo does not have access to your Location. To enable access, tap on Settings and turn on Location.',

    notSelectedLocation: 'Not Selected Location',
    searchYourlocation: 'Search your location here',
    notfount: 'NA',
    ocupacion: 'Occupation',

    //Support Forum
    supportforumDtlHeader: 'Support Forum Details',

    // Raise Ticket (Support)
    addticket: 'Add Ticket',
    editticket: 'Edit Ticket',
    supportrequest: 'Support Request',
    myticket: 'My Ticket',
    escalate: 'Escalate',
    ticketDetails: 'Ticket Details',
    ticketReply: 'Ticket Reply',
    showreply: 'Show Reply',
    ticketStatusUpdate: 'Status Update',
    escalatetonew: 'Escalate to New user',
    nouserselected: 'No user selected',
    pleaseSelectToEscalate: "Please select any user to escalate",

    // status

    hot: "Hot",
    cold: "Cold",
    warm: "Warm",
    leadType: 'Lead type',
    chooseTimeToDateCorrectly: "Choose time from today's date only",
    choosecurrentCorrect: 'Choose time beyond 2hr of current time to 7:00 PM',
    choosetimeCorrect: 'Choose time between 10:00 AM - 7:00 PM',
    checkinstatus: 'Check in status',
    closingStatus: 'Closing Status',
    shareFiles: 'Share Files',


    // lead Create
    Married: 'Married',
    Unmarried: 'Unmarried',
    Rented: 'Rented',
    Owned: 'Owned',
    MoveIn: 'Move In',
    Underonstruction: 'Under Construction',
    useOldData: "Use Old Data",
    createNew: "Create New",

    // CPChecking
    todaycpcheking: 'Today CP Checking',
    allcpcheking: 'All CP Checking',

    filterData: 'Filter Data',
  },
});

export default strings;
