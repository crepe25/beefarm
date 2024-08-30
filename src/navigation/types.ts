// RootStackParamList는 네비게이션 스택 내의 각 화면과 그 화면에서 사용할 매개변수 타입을 정의합니다.
export type RootStackParamList = {
    Home: undefined; // HomeScreen은 매개변수가 없습니다.
    BuyBee: undefined; // BuyBeeScreen도 매개변수가 없습니다.
    BuyBeeDetail: { itemId: number };
    SellBee: undefined; // SellBeeScreen도 매개변수가 없습니다.
    CreateSellPost: undefined; // CreateSellPostScreen도 매개변수가 없습니다.
    CreateBuyPost: undefined; // CreateBuyPostScreen도 매개변수가 없습니다.
    Manage: undefined; // ManageScreen도 매개변수가 없습니다.
    Settings: undefined; // SettingsScreen도 매개변수가 없습니다.
    // 필요에 따라 추가로 네비게이션할 화면을 여기에 정의합니다.
  };
  