import { useContext } from "react";
import { LoaderContext } from "../providers/LoaderProvider";

export default function useLoader() {
  const { loader, setLoader } = useContext(LoaderContext);
  return { loader, setLoader };
}
