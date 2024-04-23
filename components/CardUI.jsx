import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function CardUI() {
  return (
    <Card className="min-w-[80%]">
      <CardHeader>
        <CardDescription>Gemeinde Niederbipp sucht:</CardDescription>
        <CardTitle>
          KV-Mitarbeiter/in im Bereich Kindes- und Erwachsenenschutz (100%)
        </CardTitle>
        <CardContent className="pl-0">
          <p className="ml-0">Arbeitsort: Region Niederbipp SO</p>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
