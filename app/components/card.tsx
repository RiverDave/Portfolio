// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { GithubIcon } from "lucide-react"
// import Image from "next/image"
//
// interface ProjectCardProps {
//   title: string;
//   imageUrl: string;
//   technologies: string[];
//   sourceCodeUrl: string;
// }
//
// export default function Component({
//   title = "Project Title",
//   imageUrl = "/placeholder.svg?height=200&width=400",
//   technologies = [],
//   sourceCodeUrl = "#"
// }: Partial<ProjectCardProps>) {
//   return (
//     <Card className="w-full max-w-sm transition-all duration-300 hover:shadow-lg">
//       <CardHeader className="p-0">
//         <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
//           <Image
//             src={imageUrl}
//             alt={title}
//             layout="fill"
//             objectFit="cover"
//             className="transition-all duration-300 hover:scale-105"
//           />
//         </div>
//       </CardHeader>
//       <CardContent className="p-4">
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {Array.isArray(technologies) && technologies.map((tech, index) => (
//             <Badge key={index} variant="secondary">
//               {tech}
//             </Badge>
//           ))}
//         </div>
//       </CardContent>
//       <CardFooter className="p-4 pt-0">
//         <Button variant="outline" className="w-full" asChild>
//           <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
//             <GithubIcon className="w-4 h-4 mr-2" />
//             View Source Code
//           </a>
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }
