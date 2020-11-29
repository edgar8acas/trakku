import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuthentication } from "../slices/auth";

export const useCheckAuthentication = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthentication());
  }, [dispatch]);
};
