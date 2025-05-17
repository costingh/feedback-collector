import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url || !url.includes("g2.com/products/")) {
      return new NextResponse("Invalid URL", { status: 400 });
    }

    const browser = await puppeteer.launch({ headless: "shell" }); // or "new" for v22+
    const page = await browser.newPage();

    const reviewsUrl = url + '/reviews?filters%5Bkeyphrases%5D=&order=g2_default'
    await page.goto(reviewsUrl, {
      waitUntil: "networkidle2",
      timeout: 0,
    });

    console.log(await page.evaluate(() => document.body.innerHTML))

    const reviews = await page.evaluate(() => {
      const reviewEls = document.querySelectorAll('[id^="survey_response_"]');

      console.log(reviewEls)

      return Array.from(reviewEls).slice(0, 5).map((el) => {
        const name = el.querySelector('meta[itemprop="author"]')?.getAttribute('content') || '';
        const message = el.querySelector('meta[itemprop="reviewBody"]')?.getAttribute('content') || '';
        const stars = 5; // You can parse actual stars here if needed
        const avatar = "";
        const jobTitle = "";

        return {
          id: Math.random().toString(36).substring(2),
          name,
          message,
          stars,
          avatar,
          jobTitle,
          source: "G2",
          createdAt: new Date().toISOString(),
        };
      });
    });

    await browser.close();

    return NextResponse.json({ result: reviews });
  } catch (error) {
    console.error("SCRAPER ERROR:", error);
    return new NextResponse("Scraping failed", { status: 500 });
  }
}
