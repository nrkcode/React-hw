import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


function HomePage() {
    return (
        <div className="page w-[800px] flex flex-col mr-auto">
            <header className="grid grid-cols-2 bg-white text-gray-300 bg-slate-400">
                <div className="container mx-auto flex flex-nowrap">
                    <div className="flex items-center p-5 text-gray-900">
                        Weather.io
                    </div>
                    <div className="flex w-full items-center p-5">
                        <Input type="search" placeholder="검색할 지역 이름을 입력하세요" />
                        <Button type="submit">검색</Button>
                    </div>
                </div>
            </header>
            <div className="page__container grid grid-cols-4 auto-rows-[180px] gap-4">
                <div className="border-2 p-2 bg-slate-500">1</div>
                <div className="border-2 p-2 bg-slate-500 col-span-2">2</div>
                <div className="border-2 p-2 bg-slate-500">3</div>
                <div className="border-2 p-2 bg-slate-500 col-span-3">4</div>
                <div className="border-2 p-2 bg-slate-500">5</div>
            </div>
        </div>
    );
}

export default HomePage;
