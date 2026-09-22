import { createFileRoute } from "@tanstack/react-router";
import pageMarkup from "../original-page.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digitalize | Framer Website Template | Online Course" },
      {
        name: "description",
        content:
          "The perfect Framer website template for creators and educators ready to launch and sell their course with confidence. Designed to convert, this site helps you grow your audience, build trust, and generate digital income effortlessly.",
      },
      {
        property: "og:title",
        content: "Digitalize | Framer Website Template | Online Course",
      },
      {
        property: "og:description",
        content:
          "The perfect Framer website template for creators and educators ready to launch and sell their course with confidence. Designed to convert, this site helps you grow your audience, build trust, and generate digital income effortlessly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
