import useData from "./useData";

interface PlatformProps {
 id: number;
 name: string;
 slug: string;
}

const usePlatforms = () => useData<PlatformProps>("/platforms/lists/parents");

export default usePlatforms;
