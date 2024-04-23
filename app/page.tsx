import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <h1 className="font-bold text-[1.5rem] mb-3">
        Erfolgreiche Stellensuche
      </h1>
      <section className="w-1/2  ">
        <div className="flex items-center h-[44px] shadow-boxx rounded-rads overflow-hidden">
          <input
            placeholder="Jobbezeichnung"
            className="h-full w-full outline-none  px-5 text-lg border-none "
            type="text"
          />
          <div className="flex justify-center items-center cursor-pointer bg-gray-200 w-[10%] h-[44px] ">
            <Search className=" text-gray-500" />
          </div>
        </div>
      </section>
      <section className="mt-10 flex justify-evenly gap-5 items-center">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Auf Stellensuche.ch Jobs finden</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              voluptatibus! Distinctio, voluptates similique dicta non corporis
              temporibus atque. Temporibus, sapiente!
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button>Job finden</Button>
          </CardFooter>
        </Card>
        {/* //two */}
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Auf Stellensuche.ch Jobs ausschreiben</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              voluptatibus! Distinctio, voluptates similique dicta non corporis
              temporibus atque. Temporibus, sapiente!
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button>Ausschreiben</Button>
          </CardFooter>
        </Card>
        {/* //three */}
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Auf Stellensuche.ch Jobs bewerben</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              voluptatibus! Distinctio, voluptates similique dicta non corporis
              temporibus atque. Temporibus, sapiente!
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button>Bewerben</Button>
          </CardFooter>
        </Card>
        {/* //four */}
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Auf Stellensuche.ch Jobs gefunden werden</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              voluptatibus! Distinctio, voluptates similique dicta non corporis
              temporibus atque.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button>Inserieren</Button>
          </CardFooter>
        </Card>
      </section>
      <section className="mt-10 flex flex-col items-center w-full">
        <h2 className="font-bold text-[1.5rem] mb-3">
          Die neusten Stellenangebote
        </h2>
        <div className="min-w-[90%] flex flex-col gap-y-5">
          <Card className="min-w-[80%]">
            <CardHeader>
              <CardDescription>Gemeinde Niederbipp sucht:</CardDescription>
              <CardTitle>
                KV-Mitarbeiter/in im Bereich Kindes- und Erwachsenenschutz
                (100%)
              </CardTitle>
              <CardContent className="pl-0">
                <p className="ml-0">Arbeitsort: Region Niederbipp SO</p>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="min-w-[80%]">
            <CardHeader>
              <CardDescription>Gemeinde Niederbipp sucht:</CardDescription>
              <CardTitle>
                KV-Mitarbeiter/in im Bereich Kindes- und Erwachsenenschutz
                (100%)
              </CardTitle>
              <CardContent className="pl-0">
                <p className="ml-0">Arbeitsort: Region Niederbipp SO</p>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="min-w-[80%]">
            <CardHeader>
              <CardDescription>Gemeinde Niederbipp sucht:</CardDescription>
              <CardTitle>
                KV-Mitarbeiter/in im Bereich Kindes- und Erwachsenenschutz
                (100%)
              </CardTitle>
              <CardContent className="pl-0">
                <p className="ml-0">Arbeitsort: Region Niederbipp SO</p>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="min-w-[80%]">
            <CardHeader>
              <CardDescription>Gemeinde Niederbipp sucht:</CardDescription>
              <CardTitle>
                KV-Mitarbeiter/in im Bereich Kindes- und Erwachsenenschutz
                (100%)
              </CardTitle>
              <CardContent className="pl-0">
                <p className="ml-0">Arbeitsort: Region Niederbipp SO</p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
        <Button className="mt-8 mb-12">Weitere Stellen aanzeigen</Button>
      </section>
    </main>
  );
};

export default Home;
