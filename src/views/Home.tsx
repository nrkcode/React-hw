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
                    <Card className="">
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
                                    <span className="text-6xl font-extrabold">11</span>
                                    <span className="text-3xl mt-2 font-bold">℃</span>
                                </div>
                            </div>
                            <Separator className="my-4" />
                            <h4 className="text-sm font-medium">
                                2024-11-13
                            </h4>
                            <h4 className="text-sm font-medium">
                                Seoul SouthKorea
                            </h4>
                        </CardContent>
                    </Card>

                    <Card className="col-span-2">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
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
