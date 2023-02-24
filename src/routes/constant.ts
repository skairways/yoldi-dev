export enum AppPages {
  RootPage = "/",
  System = "/system",
  Register = "/register",
  Login = "/login",
  Account = "/account",
  // [INSERT NEW PAGE PATH ABOVE] < Needed for generating containers seamlessly
}

export enum AccountPages {
  Profile = AppPages.Account + "/profile",
}
