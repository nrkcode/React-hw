import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "@/hooks/useKakaoLoader"

function HomePage() {
    useKakaoLoader()
    return (
        <div className="page max-w-[1440px] h-screen flex align-center justify-center">
            <div className="page__container h-full  bg-slate-400">
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
                                placeholder="검색할 지역 이름을 영어로 입력하세요."
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
                            <p className="text-sm font-medium">2024-11-13</p>
                            <p className="text-sm font-medium">
                                Seoul SouthKorea
                            </p>
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
                        <CardContent className="flex flex-nowrap gap-4 overflow-x-scroll scrollbar-hide">
                            <Card className="flex min-w-fit pt-2 pb-2 pr-4 pl-4 flex-col justify-center">
                                <span>오전 0시</span>
                                <img
                                    src="src/assets/icons/1000n.svg"
                                    alt="weather-icon"
                                    className="h-16 w-16"
                                />
                                <div className="flex justify-items-start justify-center">
                                    <span className="text-xl font-extrabold">
                                        13
                                    </span>
                                    <span className="text-sm mt-[5%] font-bold">
                                        ℃
                                    </span>
                                </div>
                            </Card>
                            <Card className="flex min-w-fit pt-2 pb-2 pr-4 pl-4 flex-col justify-center">
                                <span>오전 1시</span>
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
                                <span>오전 2시</span>
                                <img
                                    src="src/assets/icons/1000n.svg"
                                    alt="weather-icon"
                                    className="h-16 w-16"
                                />
                                <div className="flex justify-items-start justify-center">
                                    <span className="text-xl font-extrabold">
                                        12
                                    </span>
                                    <span className="text-sm mt-[5%] font-bold">
                                        ℃
                                    </span>
                                </div>
                            </Card>
                            <Card className="flex min-w-fit pt-2 pb-2 pr-4 pl-4 flex-col justify-center">
                                <span>오전 3시</span>
                                <img
                                    src="src/assets/icons/1000n.svg"
                                    alt="weather-icon"
                                    className="h-16 w-16"
                                />
                                <div className="flex justify-items-start justify-center">
                                    <span className="text-xl font-extrabold">
                                        12
                                    </span>
                                    <span className="text-sm mt-[5%] font-bold">
                                        ℃
                                    </span>
                                </div>
                            </Card>
                            <Card className="flex min-w-fit pt-2 pb-2 pr-4 pl-4 flex-col justify-center">
                                <span>오전 4시</span>
                                <img
                                    src="src/assets/icons/1003n.svg"
                                    alt="weather-icon"
                                    className="h-16 w-16"
                                />
                                <div className="flex justify-items-start justify-center">
                                    <span className="text-xl font-extrabold">
                                        12
                                    </span>
                                    <span className="text-sm mt-[5%] font-bold">
                                        ℃
                                    </span>
                                </div>
                            </Card>
                            <Card className="flex min-w-fit pt-2 pb-2 pr-4 pl-4 flex-col justify-center">
                                <span>오전 5시</span>
                                <img
                                    src="src/assets/icons/1003n.svg"
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
                                <span>오전 6시</span>
                                <img
                                    src="src/assets/icons/1003n.svg"
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

                    {/* 지도 */}
                    <Card className="">
                        <Map
                            id="map"
                            center={{
                                /** 지도의 중심좌표 */
                                lat: 37.5683,
                                lng: 126.9778,
                            }}
                            style={{
                                /** 지도의 크기 */
                                width: "100%",
                                height: "100%",
                                borderRadius: "8px",
                            }}
                            /** 지도의 확대 레벨 */
                            level={13}
                        />
                    </Card>

                    {/* 하이라이트 */}
                    <Card className="col-span-3">
                        <CardHeader>
                            <CardTitle>Today's Highlights</CardTitle>
                            <CardDescription>
                                오늘 날씨 중 주의깊게 살펴보아야 할 이벤트를
                                조회하고 있습니다.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-4 gap-4">
                            <Card className="col-span-2 bg-neutral-100">
                                <CardHeader>
                                    <CardDescription className="font-semibold">
                                        해양 및 조수 데이터
                                        <span className="text-sm ml-1 font-normal text-neutral-400">
                                            Marine and Sailing
                                        </span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-row w-fit gap-4">
                                    <img
                                        src="src\assets\icons\Waves.png"
                                        className="h-16 w-16"
                                    />
                                    <div className="flex min-w-fit flex-col justify-center">
                                        <span className="text-sm">
                                            1회 - 만조
                                        </span>
                                        <span className="text-lg font-extrabold">
                                            02:31am
                                        </span>
                                    </div>
                                    <div className="flex min-w-fit flex-col justify-center">
                                        <span className="text-sm">
                                            2회 - 간조
                                        </span>
                                        <span className="text-lg font-extrabold">
                                            08:49am
                                        </span>
                                    </div>
                                    <div className="flex min-w-fit flex-col justify-center">
                                        <span className="text-sm">
                                            3회 - 만조
                                        </span>
                                        <span className="text-lg font-extrabold">
                                            15:08pm
                                        </span>
                                    </div>
                                    <div className="flex min-w-fit flex-col justify-center">
                                        <span className="text-sm">
                                            4회 - 간조
                                        </span>
                                        <span className="text-lg font-extrabold">
                                            21:11pm
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="col-span-2 bg-neutral-100">
                                <CardHeader>
                                    <CardDescription className="font-semibold">
                                        일출/일몰
                                        <span className="text-sm ml-1 font-normal text-neutral-400">
                                            Sunrise & Sunset
                                        </span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-row w-fit gap-4">
                                    <div className="flex min-w-fit gap-1">
                                        <img src="src\assets\icons\1000d.svg" className="h-16 w-16"/>
                                        <div className="flex min-w-fit flex-col m-1 justify-start">
                                            <span className="text-sm">Sunrise</span>
                                            <span className="text-3xl font-extrabold">07:11 AM</span>
                                        </div>
                                    </div>
                                    <div className="flex min-w-fit gap-1">
                                        <img src="src\assets\icons\1000n.svg" className="h-16 w-16"/>
                                        <div className="flex min-w-fit flex-col m-1 justify-start">
                                            <span className="text-sm">Sunset</span>
                                            <span className="text-3xl font-extrabold">05:25 PM</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-neutral-100">
                                <CardHeader>
                                    <CardDescription className="font-semibold">
                                    습도
                                    <span className="text-sm ml-1 font-normal text-neutral-400">
                                    Humidity</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex min-w-fit justify-between">
                                    <img src="src/assets/icons/Humidity.svg" className="h-10 w-10"/>
                                    <div className="">
                                        <span className="text-3xl font-extrabold">62</span>
                                        <span className="text-lg">%</span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-neutral-100">
                                <CardHeader>
                                    <CardDescription className="font-semibold">
                                    기압
                                    <span className="text-sm ml-1 font-normal text-neutral-400">
                                    Pressure</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex min-w-fit justify-between">
                                    <img src="src/assets/icons/Wind.svg" className="h-10 w-10"/>
                                    <div className="">
                                        <span className="text-3xl font-extrabold">1022</span>
                                        <span className="text-lg">hPa</span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-neutral-100">
                                <CardHeader>
                                    <CardDescription className="font-semibold">
                                    가시거리
                                    <span className="text-sm ml-1 font-normal text-neutral-400">
                                    Visibility</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex min-w-fit justify-between">
                                    <img src="src/assets/icons/Fog.svg" className="h-10 w-10"/>
                                    <div className="">
                                        <span className="text-3xl font-extrabold">10</span>
                                        <span className="text-lg">km</span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-neutral-100">
                                <CardHeader>
                                    <CardDescription className="font-semibold">
                                    체감온도
                                    <span className="text-sm ml-1 font-normal text-neutral-400">
                                    Feels Like</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex min-w-fit justify-between">
                                    <img src="src/assets/icons/Hot.svg" className="h-10 w-10"/>
                                    <div className="flex justify-start">
                                        <span className="text-3xl font-extrabold">12</span>
                                        <span className="text-lg ">℃</span>
                                        
                                    </div>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>

                    {/* 일주일 */}
                    <Card className="">
                        <CardHeader>
                            <CardTitle>7 Days</CardTitle>
                            <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-1">
                            <div className="flex justify-between bg-neutral-100 p-1 rounded">
                                <div className="flex flex-row gap-2  pl-1">
                                    <img
                                        src="src/assets/icons/1003d.svg"
                                        alt="weather-icon"
                                        className="h-8 w-8"
                                    />
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-red-800">
                                            18
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-blue-800">
                                            11
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-4 align-middle pr-1">
                                    <span className="text-sm font-medium text-center">13 Nov</span>
                                    <span className="text-sm font-medium text-center">수요일</span>
                                </div>
                            </div>
                            <div className="flex justify-between bg-neutral-100 p-1 rounded">
                                <div className="flex flex-row gap-2  pl-1">
                                    <img
                                        src="src/assets/icons/1003d.svg"
                                        alt="weather-icon"
                                        className="h-8 w-8"
                                    />
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-red-800">
                                            17
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-blue-800">
                                            12
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-4 align-middle pr-1">
                                    <span className="text-sm font-medium text-center">14 Nov</span>
                                    <span className="text-sm font-medium text-center">목요일</span>
                                </div>
                            </div>
                            <div className="flex justify-between bg-neutral-100 p-1 rounded">
                                <div className="flex flex-row gap-2  pl-1">
                                    <img
                                        src="src/assets/icons/1003d.svg"
                                        alt="weather-icon"
                                        className="h-8 w-8"
                                    />
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-red-800">
                                            18
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-blue-800">
                                            15
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-4 align-middle pr-1">
                                    <span className="text-sm font-medium text-center">15 Nov</span>
                                    <span className="text-sm font-medium text-center">금요일</span>
                                </div>
                            </div>
                            <div className="flex justify-between bg-neutral-100 p-1 rounded">
                                <div className="flex flex-row gap-2  pl-1">
                                    <img
                                        src="src/assets/icons/1006d.svg"
                                        alt="weather-icon"
                                        className="h-8 w-8"
                                    />
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-red-800">
                                            17
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-blue-800">
                                            15
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-4 align-middle pr-1">
                                    <span className="text-sm font-medium text-center">16 Nov</span>
                                    <span className="text-sm font-medium text-center">토요일</span>
                                </div>
                            </div>
                            <div className="flex justify-between bg-neutral-100 p-1 rounded">
                                <div className="flex flex-row gap-2  pl-1">
                                    <img
                                        src="src/assets/icons/1063d.svg"
                                        alt="weather-icon"
                                        className="h-8 w-8"
                                    />
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-red-800">
                                            13
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-blue-800">
                                            6
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-4 align-middle pr-1">
                                    <span className="text-sm font-medium text-center">17 Nov</span>
                                    <span className="text-sm font-medium text-center">일요일</span>
                                </div>
                            </div>
                            <div className="flex justify-between bg-neutral-100 p-1 rounded">
                                <div className="flex flex-row gap-2  pl-1">
                                    <img
                                        src="src/assets/icons/1000d.svg"
                                        alt="weather-icon"
                                        className="h-8 w-8"
                                    />
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-red-800">
                                            7
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-blue-800">
                                            1
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-4 align-middle pr-1">
                                    <span className="text-sm font-medium text-center">18 Nov</span>
                                    <span className="text-sm font-medium text-center">월요일</span>
                                </div>
                            </div>
                            <div className="flex justify-between bg-neutral-100 p-1 rounded">
                                <div className="flex flex-row gap-2  pl-1">
                                    <img
                                        src="src/assets/icons/1000d.svg"
                                        alt="weather-icon"
                                        className="h-8 w-8"
                                    />
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-red-800">
                                            11
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                    <div className="flex justify-items-start justify-center">
                                        <span className="text-xl font-bold text-blue-800">
                                            4
                                        </span>
                                        <span className="text-sm mt-[3%]">
                                            ℃
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-4 align-middle pr-1">
                                    <span className="text-sm font-medium text-center">19 Nov</span>
                                    <span className="text-sm font-medium text-center">화요일</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
