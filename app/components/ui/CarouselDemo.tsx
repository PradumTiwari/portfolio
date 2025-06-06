"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectItems } from "data/project";

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {projectItems.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-6">
              <a href={project.Link} target="_blank" rel="noopener noreferrer">
                <Card className="bg-muted/30 border border-muted rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-200">
                  <CardContent className="flex h-[400px] gap-8 p-8">
                    {/* Left: Image */}
                    <div className="w-1/2 h-full flex items-center justify-center relative">
                      {project.Img ? (
                        <Image
                          src={project.Img}
                          alt={project.Title}
                          width={500}       // Adjust based on your design
                          height={400}      // Keep consistent with parent height
                          className="rounded-lg shadow object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center rounded-lg text-muted-foreground text-xl font-medium">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* Right: Title + Description */}
                    <div className="w-1/2 flex flex-col justify-center space-y-6 px-4">
                      <h2 className="text-3xl font-bold text-foreground">
                        {project.Title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.ProjectDesc || "No description provided."}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
