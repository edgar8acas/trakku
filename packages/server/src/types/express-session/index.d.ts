import "express-session";
export module "express-session" {
  export interface Session {
    userId: number;
  }
}
