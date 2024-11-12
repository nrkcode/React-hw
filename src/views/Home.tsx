import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


function HomePage() {
    return (
        <div className="page w-[800px] flex flex-col m-20">
            <header className="grid grid-cols-2 text-gray-300 bg-slate-400">
                <div className="container mx-auto flex flex-nowrap">
                    <div className="flex items-center p-5 text-gray-900">
                        Weather.io
                    </div>
                    <div className="flex w-full items-center p-5">
                        <Input
                            type="search"
                            placeholder="검색할 지역 이름을 입력하세요"
                        />
                        <Button type="submit">검색</Button>
                    </div>
                </div>
            </header>
            <div className="page__container grid grid-cols-4 auto-rows-[300px] bg-gray-950">
                <Card className="m-3">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

                <Card className="m-3 col-span-2">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card className="m-3">

                </Card>

                <Card className="m-3 col-span-3">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

                <Card className="m-3">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default HomePage;
