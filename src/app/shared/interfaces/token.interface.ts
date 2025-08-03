export interface JwtPayload {
  exp: number;
  iat : number;
  roles: string[];
  sub: string;
}