import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";

function HomePage() {
    return (
        <div className="page max-w-[1440px] h-screen flex align-center justify-center">
            <div className="page__container h-full bg-gray-500">
                <header className="grid grid-cols-2 text-6xl font-extrabold text-white bg-slate-400">
                    <div className="container flex items-center flex-nowrap">
                        <img
                            src="src/assets/icons/logo.svg"
                            className="h-10 m-4"
                        ></img>
                        <div className="flex items-center text-3xl">
                            Weather.io
                        </div>
                        <div className="flex w-full items-center p-4">
                            <Input
                                type="search"
                                placeholder="검색할 지역 이름을 입력하세요."
                            />
                        </div>
                    </div>
                </header>

                <div className="grid ml-5 mr-5 grid-cols-4 gap-5">
                    {/* 투데이 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Today</CardTitle>
                            <CardDescription>
                                오늘 현재 날씨를 조회하고 있습니다.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col">
                            <div className="flex items-start">
                                <img
                                    src="src/assets/icons/1000n.svg"
                                    alt="weather-icon"
                                    className="h-16 w-16"
                                />
                                <div className="flex justify-items-start">
                                    <span className="text-6xl font-extrabold">
                                        11
                                    </span>
                                    <span className="text-3xl mt-[5%] font-bold">
                                        ℃
                                    </span>
                                </div>
                            </div>
                            <Separator className="my-4" />
                            <span className="text-sm font-medium">
                                2024-11-13
                            </span>
                            <span className="text-sm font-medium">
                                Seoul SouthKorea
                            </span>
                        </CardContent>
                    </Card>

                    {/* 시간별 */}
                    <Card className="col-span-2">
                        <CardHeader>
                            <CardTitle>Hourly</CardTitle>
                            <CardDescription>
                                오늘의 시간대별 날씨를 조회하고 있습니다.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-nowrap gap-4 overflow-x-scroll">
                            <Card className="flex min-w-fit pt-2 pb-2 pr-4 pl-4 flex-col justify-center">
                                <span>오전 0시</span>
                                <img
                                    src="src/assets/icons/1000n.svg"
                                    alt="weather-icon"
                                    className="h-16 w-16"
                                />
                                <div className="flex justify-items-start justify-center">
                                    <span className="text-xl font-extrabold">
                                        11
                                    </span>
                                    <span className="text-sm mt-[5%] font-bold">
                                        ℃
                                    </span>
                                </div>
                            </Card>{" "}
                            <Card className="flex min-w-fit pt-2 pb-2 pr-4 pl-4 flex-col justify-center">
                                <span>오전 0시</span>
                                <img
                                    src="src/assets/icons/1000n.svg"
                                    alt="weather-icon"
                                    className="h-16 w-16"
                                />
                                <div className="flex justify-items-start justify-center">
                                    <span className="text-xl font-extrabold">
                                        11
                                    </span>
                                    <span className="text-sm mt-[5%] font-bold">
                                        ℃
                                    </span>
                                </div>
                            </Card>{" "}
                            <Card className="flex min-w-fit pt-2 pb-2 pr-4 pl-4 flex-col justify-center">
                                <span>오전 0시</span>
                                <img
                                    src="src/assets/icons/1000n.svg"
                                    alt="weather-icon"
                                    className="h-16 w-16"
                                />
                                <div className="flex justify-items-start justify-center">
                                    <span className="text-xl font-extrabold">
                                        11
                                    </span>
                                    <span className="text-sm mt-[5%] font-bold">
                                        ℃
                                    </span>
                                </div>
                            </Card>{" "}
                            <Card className="flex min-w-fit pt-2 pb-2 pr-4 pl-4 flex-col justify-center">
                                <span>오전 0시</span>
                                <img
                                    src="src/assets/icons/1000n.svg"
                                    alt="weather-icon"
                                    className="h-16 w-16"
                                />
                                <div className="flex justify-items-start justify-center">
                                    <span className="text-xl font-extrabold">
                                        11
                                    </span>
                                    <span className="text-sm mt-[5%] font-bold">
                                        ℃
                                    </span>
                                </div>
                            </Card>{" "}
                            <Card className="flex min-w-fit pt-2 pb-2 pr-4 pl-4 flex-col justify-center">
                                <span>오전 0시</span>
                                <img
                                    src="src/assets/icons/1000n.svg"
                                    alt="weather-icon"
                                    className="h-16 w-16"
                                />
                                <div className="flex justify-items-start justify-center">
                                    <span className="text-xl font-extrabold">
                                        11
                                    </span>
                                    <span className="text-sm mt-[5%] font-bold">
                                        ℃
                                    </span>
                                </div>
                            </Card>
                            <Card className="flex min-w-fit pt-2 pb-2 pr-4 pl-4 flex-col justify-center">
                                <span>오전 0시</span>
                                <img
                                    src="src/assets/icons/1000n.svg"
                                    alt="weather-icon"
                                    className="h-16 w-16"
                                />
                                <div className="flex justify-items-start justify-center">
                                    <span className="text-xl font-extrabold">
                                        11
                                    </span>
                                    <span className="text-sm mt-[5%] font-bold">
                                        ℃
                                    </span>
                                </div>
                            </Card>
                        </CardContent>
                    </Card>

                    <Card className=""></Card>

                    <Card className="col-span-3">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                    </Card>

                    <Card className="">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
