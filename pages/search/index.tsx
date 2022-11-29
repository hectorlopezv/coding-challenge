import Link from "next/link";
import { useState } from "react";
import Search from "../../components/search/Search";
import useSearch from "../../hooks/useSearch";

export interface SearchProps {
  value: any;
}

const SearchPage: React.FC<SearchProps> = () => {
  const [term, setTern] = useState("");
  const data: any = useSearch("nextjs");
  const items = [
    {
      kind: "customsearch#result",
      title: "Hector - Wikipedia",
      htmlTitle: "<b>Hector</b> - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Hector",
      displayLink: "en.wikipedia.org",
      snippet:
        "In Greek mythology, Hector was a Trojan prince and the greatest warrior for Troy during the Trojan war. Hector led the Trojans and their allies in the ...",
      htmlSnippet:
        "In Greek mythology, <b>Hector</b> was a Trojan prince and the greatest warrior for Troy during the Trojan war. <b>Hector</b> led the Trojans and their allies in the&nbsp;...",
      cacheId: "kOVBRfcA2aUJ",
      formattedUrl: "https://en.wikipedia.org/wiki/Hector",
      htmlFormattedUrl: "https://en.wikipedia.org/wiki/<b>Hector</b>",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQzcqHKKd8h8becO52ODFNckmHuin6bJcWZDT4Va4ujU3XYOxsun1m4Tw",
            width: "150",
            height: "103",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/commons/a/a4/Hector_brought_back_to_Troy.jpg",
            "theme-color": "#eaecf0",
            "og:image:width": "1200",
            "og:type": "website",
            viewport:
              "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
            "og:title": "Hector - Wikipedia",
            "og:image:height": "828",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Hector_brought_back_to_Troy.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hector, Minnesota",
      htmlTitle: "<b>Hector</b>, Minnesota",
      link: "https://hector.govoffice.com/",
      displayLink: "hector.govoffice.com",
      snippet:
        "The City of Hector Police Department is seeking a Full-time Patrol Officer. Please see posting along with supplemental & employment application under employment ...",
      htmlSnippet:
        "The City of <b>Hector</b> Police Department is seeking a Full-time Patrol Officer. Please see posting along with supplemental &amp; employment application under employment&nbsp;...",
      cacheId: "3wIk-Ufv_vAJ",
      formattedUrl: "https://hector.govoffice.com/",
      htmlFormattedUrl: "https://<b>hector</b>.govoffice.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2bjN4-S_Y8x9WtGXAK9kF38ZeNDRs7EAqXkrgzO3Z9Ao9slrskGzihe3n",
            width: "197",
            height: "256",
          },
        ],
        metatags: [
          {
            "og:type": "article",
            viewport:
              "width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=0.8, user-scalable=yes",
          },
        ],
        cse_image: [
          {
            src: "https://hector.govoffice.com/vertical/Sites/%7BBB52B1BF-C0CB-46AA-A3E8-60FF173E7773%7D/uploads/2023_Recycling_Schedule_Renville_County_(002)_Web.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "HECTOR INTERNATIONAL AIRPORT | FARGO ND",
      htmlTitle: "<b>HECTOR</b> INTERNATIONAL AIRPORT | FARGO ND",
      link: "https://www.fargoairport.com/",
      displayLink: "www.fargoairport.com",
      snippet:
        "The Hector International Airport in Fargo, North Dakota, offers a variety of daily flights to your favorite destinations.",
      htmlSnippet:
        "The <b>Hector</b> International Airport in Fargo, North Dakota, offers a variety of daily flights to your favorite destinations.",
      cacheId: "mHWnbcoWPqoJ",
      formattedUrl: "https://www.fargoairport.com/",
      htmlFormattedUrl: "https://www.fargoairport.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxKjn6VHFFm_1nai-XzHvivBMG8qJoEbrClynYCuxXGq21rE5-LnYnkBg",
            width: "324",
            height: "155",
          },
        ],
        metatags: [
          {
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "og:site_name": "Hector International Airport",
            "article:modified_time": "2022-11-24T16:40:54+00:00",
            viewport: "width=device-width, initial-scale=1.0",
            "og:title": "HECTOR INTERNATIONAL AIRPORT | FARGO ND",
            "og:locale": "en_US",
            "og:url": "https://www.fargoairport.com/",
            "msapplication-tileimage":
              "https://www.fargoairport.com/wp-content/uploads/2015/12/logo-270x270.png",
            "og:description":
              "The Hector International Airport in Fargo, North Dakota, offers a variety of daily flights to your favorite destinations.",
          },
        ],
        cse_image: [
          {
            src: "https://www.fargoairport.com/wp-content/uploads/2022/09/hector-international-airport-hero-copy-1.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Welcome • Hector's",
      htmlTitle: "Welcome • <b>Hector&#39;s</b>",
      link: "https://hectorskirkland.com/",
      displayLink: "hectorskirkland.com",
      snippet:
        "Jan 20, 2021 ... With a heavy heavy heart, we have decided not to re-open Hector's restaurant. We want to thank you for your patronage over these years.",
      htmlSnippet:
        "Jan 20, 2021 <b>...</b> With a heavy heavy heart, we have decided not to re-open <b>Hector&#39;s</b> restaurant. We want to thank you for your patronage over these years.",
      cacheId: "ZSgfTWIqNOQJ",
      formattedUrl: "https://hectorskirkland.com/",
      htmlFormattedUrl: "https://<b>hectors</b>kirkland.com/",
      pagemap: {
        metatags: [
          {
            "og:image": "/wp-content/uploads/Hectors-Logo-Main.png",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "og:site_name": "Hector's",
            "article:modified_time": "2021-01-20T17:40:45+00:00",
            viewport: "width=device-width, initial-scale=1",
            "og:title": "Welcome • Hector's",
            "og:locale": "en_US",
            bingbot:
              "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
            "og:url": "/",
            "og:description":
              "HOME   |   EMPLOYEES      With a heavy heavy heart, we have decided not to re-open Hector's restaurant.\r\nWe want to thank you for your patronage over these years. For the last 45",
          },
        ],
        hatomfeed: [{}],
      },
    },
    {
      kind: "customsearch#result",
      title: "Town of Hector NY |",
      htmlTitle: "Town of <b>Hector</b> NY |",
      link: "https://www.hectorny.us/",
      displayLink: "www.hectorny.us",
      snippet:
        "Hector Town Hall, 5097 NYS Route 227, Burdett NY 14818 607-546-5286 | Fax 607-546-5200 | Email · Website Disclaimer · Government Websites by CivicPlus ®.",
      htmlSnippet:
        "<b>Hector</b> Town Hall, 5097 NYS Route 227, Burdett NY 14818 607-546-5286 | Fax 607-546-5200 | Email &middot; Website Disclaimer &middot; Government Websites by CivicPlus ®.",
      cacheId: "3UWK33IXy9UJ",
      formattedUrl: "https://www.hectorny.us/",
      htmlFormattedUrl: "https://www.<b>hector</b>ny.us/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSSNEreB_z7Yccc00gKCLJTKgVCHEWXIpVNROaTi-SBfQnOe-r5U7mxRMa3",
            width: "284",
            height: "177",
          },
        ],
        Item: [
          {
            num_replies: "0",
          },
          {
            num_replies: "0",
          },
        ],
        metatags: [
          {
            viewport: "width=device-width, initial-scale=1.0",
          },
        ],
        cse_image: [
          {
            src: "https://www.hectorny.us/sites/g/files/vyhlif696/f/styles/news_image_teaser/public/news/meetthecandidate_fb_post.png?itok=5m9vxNaq",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hector's Omaha | Baja Style Mexican Cuisine",
      htmlTitle: "<b>Hector&#39;s</b> Omaha | Baja Style Mexican Cuisine",
      link: "https://hectorsomaha.com/",
      displayLink: "hectorsomaha.com",
      snippet:
        "Since 1997, Hector's Restaurant has been tempting your taste buds and spicing up your life with the most amazing authentic Mexican cuisine!",
      htmlSnippet:
        "Since 1997, <b>Hector&#39;s</b> Restaurant has been tempting your taste buds and spicing up your life with the most amazing authentic Mexican cuisine!",
      cacheId: "JqvS3y8gDTYJ",
      formattedUrl: "https://hectorsomaha.com/",
      htmlFormattedUrl: "https://<b>hectors</b>omaha.com/",
      pagemap: {
        metatags: [
          {
            viewport:
              "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hector Wine Company – Wine made with soul on Seneca Lake ...",
      htmlTitle:
        "<b>Hector</b> Wine Company – Wine made with soul on Seneca Lake ...",
      link: "https://hectorwinecompany.com/",
      displayLink: "hectorwinecompany.com",
      snippet:
        "At Hector Wine Company, our portfolio emulates a deep commitment to making wines that reflect our centuries old farm, Sawmill Creek Vineyards.",
      htmlSnippet:
        "At <b>Hector</b> Wine Company, our portfolio emulates a deep commitment to making wines that reflect our centuries old farm, Sawmill Creek Vineyards.",
      cacheId: "oDM4ran6zsMJ",
      formattedUrl: "https://hectorwinecompany.com/",
      htmlFormattedUrl: "https://<b>hector</b>winecompany.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmOCzeKMQKgTzdViB0mxS9r6fvAhereXk1u8qOmsJSYYpqDeFKmWoku101",
            width: "283",
            height: "178",
          },
        ],
        Event: [
          {
            endDate: "2022-12-18T14:00:00Z",
            name: "High Tea",
            description: "<p>Ticket price includes three courses of sweet",
            url: "https://hectorwinecompany.com/event/high-tea/",
            startDate: "2022-12-18T12:00:00Z",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://hectorwinecompany.com/wp-content/uploads/2021/03/social-hwc.jpg",
            copyright: "HECTOR WINE COMPANY",
            "og:type": "business.business",
            "twitter:card": "summary",
            "twitter:title":
              "Hector Wine Company – Wine made with soul on Seneca Lake, New York",
            "og:site_name": "HECTOR WINE COMPANY",
            "tec-api-origin": "https://hectorwinecompany.com",
            author: "HECTOR WINE COMPANY",
            "og:title":
              "Hector Wine Company – Wine made with soul on Seneca Lake, New York",
            "msapplication-tileimage":
              "https://hectorwinecompany.com/wp-content/uploads/2019/06/cropped-hw_site-icon_512x512-270x270.png",
            "og:description":
              "Small producer of handcrafted wines from the east side of Seneca Lake. Artisan, locally sourced food market inside the winery. #winemadewithsoul",
            "twitter:image":
              "https://hectorwinecompany.com/wp-content/uploads/2021/09/social-hwc.jpg",
            "twitter:site": "@Hectorwineco",
            viewport: "width=device-width, initial-scale=1, maximum-scale=1",
            "twitter:description":
              "Small Finger Lakes producer of expressive reds and aromatic whites from the east side of Seneca Lake. #winemadewithsoul",
            "og:url": "https://hectorwinecompany.com/",
            "tec-api-version": "v1",
          },
        ],
        cse_image: [
          {
            src: "https://hectorwinecompany.com/wp-content/uploads/2021/03/social-hwc.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hector | Characteristics, Exploits, & Facts | Britannica",
      htmlTitle:
        "<b>Hector</b> | Characteristics, Exploits, &amp; Facts | Britannica",
      link: "https://www.britannica.com/topic/Hector-Greek-mythology",
      displayLink: "www.britannica.com",
      snippet:
        "Sep 30, 2022 ... Hector, in Greek legend, the eldest son of the Trojan king Priam and his queen Hecuba. He was the husband of Andromache and the chief ...",
      htmlSnippet:
        "Sep 30, 2022 <b>...</b> <b>Hector</b>, in Greek legend, the eldest son of the Trojan king Priam and his queen Hecuba. He was the husband of Andromache and the chief&nbsp;...",
      cacheId: "EsQfw-LNN8kJ",
      formattedUrl: "https://www.britannica.com/topic/Hector-Greek-mythology",
      htmlFormattedUrl:
        "https://www.britannica.com/topic/<b>Hector</b>-Greek-mythology",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_fRgGRwAYEdyvlnbPhg4ZLbyYZnn6Cvl8pU1di8OsrUGehcKSC8XjaDs",
            width: "200",
            height: "252",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://cdn.britannica.com/81/133981-050-E4422992/Priam-Hector-mourning-body-Troy.jpg",
            "twitter:card": "summary_large_image",
            "og:type": "ARTICLE",
            "og:site_name": "Encyclopedia Britannica",
            "og:title": "Hector | Characteristics, Exploits, & Facts",
            "og:image:type": "image/jpeg",
            "fb:pages": "74442380906",
            "og:description":
              "Hector,  in Greek legend, the eldest son of the Trojan king Priam and his queen Hecuba. He was the husband of Andromache and the chief warrior of the Trojan army. In Homer’s Iliad he is represented as an ideal warrior and the mainstay of Troy. Hector’s character is drawn in most favourable colours as a good son, a loving husband and father, and a trusty friend. His leave-taking of Andromache in the sixth book of the Iliad, and his departure to meet Achilles for the last time, are movingly described. He is an especial favourite of Apollo, and later poets",
            "twitter:image":
              "https://cdn.britannica.com/81/133981-050-E4422992/Priam-Hector-mourning-body-Troy.jpg",
            "fb:app_id": "1887621861548296",
            "twitter:site": "@britannica",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "Hector,  in Greek legend, the eldest son of the Trojan king Priam and his queen Hecuba. He was the husband of Andromache and the chief warrior of the Trojan army. In Homer’s Iliad he is represented as an ideal warrior and the mainstay of Troy. Hector’s character is drawn in most favourable colours as a good son, a loving husband and father, and a trusty friend. His leave-taking of Andromache in the sixth book of the Iliad, and his departure to meet Achilles for the last time, are movingly described. He is an especial favourite of Apollo, and later poets",
            "og:url": "https://www.britannica.com/topic/Hector-Greek-mythology",
          },
        ],
        cse_image: [
          {
            src: "https://cdn.britannica.com/81/133981-050-E4422992/Priam-Hector-mourning-body-Troy.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Buffalo Lake-Hector-Stewart Schools / Homepage",
      htmlTitle: "Buffalo Lake-<b>Hector</b>-Stewart Schools / Homepage",
      link: "https://www.blhsd.org/",
      displayLink: "www.blhsd.org",
      snippet: "Buffalo Lake-Hector-Stewart Schools. Home of the Mustangs.",
      htmlSnippet:
        "Buffalo Lake-<b>Hector</b>-Stewart Schools. Home of the Mustangs.",
      cacheId: "4k0tyPWy_e8J",
      formattedUrl: "https://www.blhsd.org/",
      htmlFormattedUrl: "https://www.blhsd.org/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXLCE4HE1pyYh5ruhFQwGIZqmQg_7dNLrltc8BZcwF3JZFO2J7kyg3tMIt",
            width: "259",
            height: "194",
          },
        ],
        document: [
          {
            siteid: "4",
          },
        ],
        metatags: [
          {
            "og:type": "website",
            "fb:app_id": "411584262324304",
            "twitter:title": "Buffalo Lake-Hector-Stewart Schools / Homepage",
            viewport: "width=device-width, initial-scale=1.0",
            "og:title": "Buffalo Lake-Hector-Stewart Schools / Homepage",
            "og:url": "http%3A%2F%2Fwww.blhsd.org%2Fdefault.aspx%3FPageID%3D1",
          },
        ],
        cse_image: [
          {
            src: "https://www.blhsd.org/cms/lib/MN50000754/Centricity/Domain/4/IiMG_6611.jpeg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hector's",
      htmlTitle: "<b>Hector&#39;s</b>",
      link: "https://www.hectors.com/",
      displayLink: "www.hectors.com",
      snippet:
        "Hector's Daily SPecials · 3pm -6pm. Tuesday thru Thursday · $5 Happy Hour Specials · Welcome to · Hector's, · a Mexican Restaurant · Wauwatosa, wi · Over 10 Different.",
      htmlSnippet:
        "<b>Hector&#39;s</b> Daily SPecials &middot; 3pm -6pm. Tuesday thru Thursday &middot; $5 Happy Hour Specials &middot; Welcome to &middot; <b>Hector&#39;s</b>, &middot; a Mexican Restaurant &middot; Wauwatosa, wi &middot; Over 10 Different.",
      cacheId: "G1PjKF-NgSsJ",
      formattedUrl: "https://www.hectors.com/",
      htmlFormattedUrl: "https://www.<b>hectors</b>.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENWNlbrFC5FDe2xcZ6LLTDYk_pKtyXR6D7yQarYJk3VW5qXAl3Ty_PcM",
            width: "185",
            height: "174",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://static.wixstatic.com/media/b75b96_8564c8e9077e4481b5ff38d16a6ef791%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/b75b96_8564c8e9077e4481b5ff38d16a6ef791%7Emv2.jpg",
            "og:image:width": "2500",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Home",
            "og:site_name": "hectors",
            skype_toolbar: "skype_toolbar_parser_compatible",
            "og:title": "Home",
            "og:image:height": "1330",
            "twitter:image":
              "https://static.wixstatic.com/media/b75b96_8564c8e9077e4481b5ff38d16a6ef791%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/b75b96_8564c8e9077e4481b5ff38d16a6ef791%7Emv2.jpg",
            fb_admins_meta_tag: "HectorsOnState",
            viewport: "width=320, user-scalable=yes",
            "fb:admins": "HectorsOnState",
            "og:url": "https://www.hectors.com",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://static.wixstatic.com/media/b75b96_663cd4376265442da945ccc39e0e4588~mv2.gif",
          },
        ],
      },
    },
  ];
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link href="/">
          <img
            className="searchPage__Logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="google image"
          />
        </Link>
        <div className="">
          <Search />
        </div>
      </div>

      <div className="">
        <p className="">
          {`About ${data?.searchInformation?.formattedTotalResults} results ${data?.searchInformation?.formattedSearchTime} seconds for ${term}`}
        </p>

        {items?.map((item: any, index: number) => {
          return (
            <div className="" key={index}>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap.cse_image[0]?.src && (
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      className=""
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="" href={item.link}>
                {item.title}
              </a>
              <p className="">{item.snippet}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
