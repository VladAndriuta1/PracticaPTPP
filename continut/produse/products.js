const productModels = {
  
  smartphones: [
    {
      id: "iphone-14",
      name: "iPhone 14 ",
      category: "Smartphone",
      brand: "Apple",
      stores: {
        darwin: {
          price: 12499,
          inStock: true,
          url: "https://darwin.md/apple-iphone-14-4-gb-128-gb-midnight.html"
        },
        orange: {
          price: 11999,
          inStock: true,
          url: "https://www.orange.md/ro/shop/catalog/telefoane/toate-telefoanele/iphone-14-128gb.html"
        },
        enter: {
          price: 12499,
          inStock: true,
          url: "https://enter.online/telefoane/smartphone-uri/apple-iphone-14-4-gb-128-gb-single-sim-midnight.html"
        },
        maximum: {
          price: 12499,
          inStock: true,
          url: "https://maximum.md/ro/6466647/"
        },
        ultra: {
          price: 12499,
          inStock: true,
          url: "https://ultra.md/product/iphone-14-128gb-starlight-md"
        },
        bomba: {
          price: 12499,
          inStock: true,
          url: "https://bomba.md/ro/product/smartphone-apple-iphone-14-128gb-midnight-102900171/"
        }
      },
      specs: {
        screen: "6.1 inch Super Retina XDR",
        processor: "A16 Bionic",
        ram: "6GB",
        storage: "128GB",
        camera: "48MP + 12MP + 12MP",
        battery: "3200mAh"
      }
    },
    {
      id: "iPhone-15",
      name: "iPhone 15",
      category: "Smartphone",
      brand: "Apple",
      stores: {
        darwin: {
          price: 24999,
          inStock: true,
          url: "https://darwin.md/samsung-galaxy-s23-ultra-12-gb-256-gb-beige.html"
        },
        orange: {
          price: 23999,
          inStock: false,
          url: "https://www.orange.md/ro/shop/catalog/telefoane/samsung-galaxy-s23/samsung-galaxy-s23-ultra-"
        },
        enter: {
          price: 26999,
          inStock: false,
          url: "https://enter.online/telefoane/smartphone-uri/samsung-galaxy-s23-ultra-s918-12-gb-512-gb-5g-dual-sim-black"
        },
        maximum: {
          price: 23999,
          inStock: false,
          url: "https://maximum.md/ro/6573102/"
        },
        ultra: {
          price: 24999,
          inStock: false,
          url: "https://ultra.md/ru/product/s918-s23-ultra-12256gb-black"
        },
        bomba: {
          price: 23999,
          inStock: false,
          url: "https://bomba.md/ro/product/smartphone-samsung-galaxy-s23-ultra-12-256gb-black-890803/"
        }
      },
      specs: {
        screen: "6.8 inch Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        storage: "256GB",
        camera: "200MP + 12MP + 10MP + 10MP",
        battery: "5000mAh"
      }
    },
    {
      id: "samsung-s23-ultra",
      name: "Samsung Galaxy S23 Ultra",
      category: "Smartphone",
      brand: "Samsung",
      stores: {
        darwin: {
          price: 24999,
          inStock: true,
          url: "https://darwin.md/samsung-galaxy-s23-ultra-12-gb-256-gb-beige.html"
        },
        orange: {
          price: 23999,
          inStock: false,
          url: "https://www.orange.md/ro/shop/catalog/telefoane/samsung-galaxy-s23/samsung-galaxy-s23-ultra-"
        },
        enter: {
          price: 26999,
          inStock: false,
          url: "https://enter.online/telefoane/smartphone-uri/samsung-galaxy-s23-ultra-s918-12-gb-512-gb-5g-dual-sim-black"
        },
        maximum: {
          price: 23999,
          inStock: false,
          url: "https://maximum.md/ro/6573102/"
        },
        ultra: {
          price: 24999,
          inStock: false,
          url: "https://ultra.md/ru/product/s918-s23-ultra-12256gb-black"
        },
        bomba: {
          price: 23999,
          inStock: false,
          url: "https://bomba.md/ro/product/smartphone-samsung-galaxy-s23-ultra-12-256gb-black-890803/"
        }
      },
      specs: {
        screen: "6.8 inch Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        storage: "256GB",
        camera: "200MP + 12MP + 10MP + 10MP",
        battery: "5000mAh"
      }
    },
    {
      id: "xiaomi-13-pro",
      name: "Xiaomi 13 Pro",
      category: "Smartphone",
      brand: "Xiaomi",
      stores: {
        darwin: {
          price: 21499,
          inStock: false,
          url: "https://darwin.md/xiaomi-13-pro"
        },
        orange: {
          price: 21499,
          inStock: false,
          url: "https://www.orange.md/ro/shop/catalog/telefoane/toate-telefoanele/xiaomi-redmi-note-13-pro---8-512gb.html"
        },
        enter: {
          price: 21499,
          inStock: false,
          url: "https://enter.online/telefoane/smartphone-uri/xiaomi-13-pro-12-gb-256-gb-5g-dual-sim-ceramic-black"
        },
        maximum: {
          price: 21499,
          inStock: false,
          url: "https://maximum.md/ro/6573102/"
        },
        ultra: {
          price: 21499,
          inStock: false,
          url: "https://ultra.md/product/xiaomi-13-pro-12256gb-eu-ceramic-black"
        },
        bomba: {
          price: 23999,
          inStock: true,
          url: "https://bomba.md/ro/product/smartphone-samsung-galaxy-s23-ultra-12-256gb-black-890803/"
        }
      },
      specs: {
        screen: "6.73 inch AMOLED",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP + 50MP + 50MP"
      }
    }
  ],


  laptops: [
    {
      id: "macbook-pro-14",
      name: "MacBook Pro 14",
      category: "Laptop",
      brand: "Apple",
      stores: {
        darwin: {
          price: 45990,
          inStock: true,
          url: "https://darwin.md/laptopuri/apple-macbook-pro-14-2023"
        },
        orange: {
          price: 38699,
          inStock: true,
          url: "https://www.orange.md/ro/shop/catalog/laptopuri/toate-laptopurile/laptop-apple-macbook-pro-14-m4-16-512gb.html"
        },
        enter: {
          price: 38990,
          inStock: false,
          url: "https://enter.online/laptopuri/apple-macbook-pro-14-2024-m4-m4-16-gb-512-gb-vga-integrata-black"
        },
        maximum: {
          price: 36000,
          inStock: true,
          url: "https://maximum.md/ro/search?applied=1&category_ids=10702&from_price=2&query=Apple%20MacBook%20Pro%2014&to_price=859999"
        },
        ultra: {
          price: 34990,
          inStock: true,
          url: "https://ultra.md/product/nb-apple-macbook-pro-14-2-mphe3rua-space-gray-m2-pro-16gb-512gb"
        },
        bomba: {
          price: 38990,
          inStock: false,
          url: "https://bomba.md/ro/product/laptop-notebook-apple-macbook-pro-14-2023-16-gb-512-gb-mac-os-ventura-argintiu-909306/"
        }
      },
      specs: {
        screen: "14.2 inch Liquid Retina XDR",
        processor: "M2 Pro",
        ram: "16GB",
        storage: "512GB",
        gpu: "Integrated",
        battery: "70Wh"
      }
    },
    {
      id: "dell-vostro",
      name: "Dell Vostro ",
      category: "Laptop",
      brand: "Dell",
      stores: {
        darwin: {
          price: 13890,
          inStock: true,
          url: "https://darwin.md/laptop-dell-vostro-15-3530-core-i5-1335u-16-gb-512-gb-vga-black-1.html"
        },
        orange: {
          price: 33000,
          inStock: true,
          url: "https://shop.orange.eg/en/devices/laptops/dell-vostro-3530-intel-i7"
        },
        enter: {
          price: 15390,
          inStock: false,
          url: "https://enter.online/laptopuri/dell-vostro-15-3530-core-i5-1335u-16-gb-512-gb-vga-black"
        },
        maximum: {
          price: 12999,
          inStock: true,
          url: "https://maximum.md/ro/6866186/"
        },
        ultra: {
          price: 16990,
          inStock: false,
          url: "https://ultra.md/ru/product/nb-dell-15-6-vostro-3530-black-core-i5-1335u-16gb-512gb-win-11"
        },
        bomba: {
          price: 14999,
          inStock: false,
          url: "https://bomba.md/ro/product/laptop-156-dell-vostro-15-30003530--intel-core-i5-1334u--16gb--512gb-ssd--carbon-black-7097905/"
        }
      },
      specs: {
        screen: "15.6 inch 4K OLED",
        processor: "Intel Core i5/i7",
        ram: "16GB",
        storage: "512GB",
        gpu: "Core i5",
        battery: "86Wh"
      }
    },
    {
      id: "lenovo-ideapad-3",
      name: "Lenovo Ideapad 3",
      category: "Laptop",
      brand: "Lenovo",
      stores: {
        darwin: {
          price: 10590,
          inStock: true,
          url: "https://darwin.md/laptop-lenovo-ideapad-slim-3-16iah8-core-i5-12450h-16-gb-512-gb-vga-integrata-gray.html"
        },
        orange: {
          price: 7699,
          inStock: false,
          url: "https://www.orange.md/ro/shop/catalog/laptopuri/toate-laptopurile/laptop-lenovo-ideapad-slim-3-ryzen3-8-512gb.html"
        },
        enter: {
          price: 10590,
          inStock: true,
          url: "https://enter.online/laptopuri/lenovo-ideapad-slim-3-16iah8-core-i5-12450h-16-gb-512-gb-vga-integrata-gray"
        },
        maximum: {
          price: 9999,
          inStock: true,
          url: "https://maximum.md/ro/6869307/"
        },
        ultra: {
          price: 11390,
          inStock: true,
          url: "https://ultra.md/product/nb-lenovo-15-6-ideapad-slim-3-15iah8-grey-core-i5-12450h-16gb-512gb-216363"
        },
        bomba: {
          price: 11990,
          inStock: false,
          url: "https://bomba.md/ru/product/noutbuk-16-lenovo-ideapad-slim-3-16iah8---intel-core-i5-12450h---16gb---512gb-ssd---arctic-grey-7094314/"
        }
      },
      specs: {
        screen: "16 inch Full HD IPS",
        processor: "Intel Core i5-12450H",
        ram: "16GB",
        storage: "512GB",
        gpu: "Intel UHD Graphics"
      }
    }
  ],

  tvs: [
    {
      id: " LG-43NANO81T6A",
      name: " LG 43NANO81T6A\" Smart TV",
      category: "TV",
      brand: "LG",
      stores: {
        darwin: {
          price: 6990,
          inStock: true,
          url: "https://darwin.md/televizor-lg-65-oled65c24la-smart-tv-4k-black.html"
        },
        orange: {
          price: 10000,
          inStock: false,
          url: "https://orange.md/lg-c2-65"
        },
        enter: {
          price: 6990,
          inStock: true,
          url: "https://enter.online/ru/televizory/lg-43nano81t6a-43-nanocell-4k-smart-tv-chernyi"
        },
        maximum: {
          price: 6999,
          inStock: true,
          url: "https://maximum.md/ro/6837589/"
        },
        ultra: {
          price: 6999,
          inStock: true,
          url: "https://ultra.md/ru/product/43-led-smart-tv-lg-43nano81t6a-nanocell-3840-x-2160-webos-black"
        },
        bomba: {
          price: 10000,
          inStock: false,
          url: ""
        }
      },
      specs: {
        screen: "43 inch NanoCell",
        resolution: "4K (3840 x 2160)",
        hdr: "HDR10",
        processor: "α5 AI Processor 4K Gen7",
        ports: "1 HDMI, 2 USB",
        smart: "webOS"
      }
    },
    {
      id: "Samsung-UE50DU8000UXUA",
      name: "Samsung UE50DU8000UXUA\" 4k Smart TV",
      category: "TV",
      brand: "Samsung",
      stores: {
        darwin: {
          price: 8990,
          inStock: true,
          url: "https://darwin.md/televizor-samsung-ue50du8000uxua-50-led-4k-smart-tv-black.html#nav-info-product"
        },
        orange: {
          price: 9999,
          inStock: true,
          url: "https://www.orange.md/ro/shop/catalog/tv/toate-tv/televizor-samsung-ue50du8000uxua.html"
        },
        enter: {
          price: 8990,
          inStock: true,
          url: "https://enter.online/televizoare/samsung-ue50du8000uxua-50-led-4k-smart-tv-black"
        },
        maximum: {
          price: 8949,
          inStock: true,
          url: "https://maximum.md/ro/6839599/"
        },
        ultra: {
          price: 8999,
          inStock: false,
          url: "https://ultra.md/ru/product/50-led-smart-tv-samsung-ue50du8000uxua-crystal-uhd-3840x2160-tizen-os-grey"
        },
        bomba: {
          price: 8999,
          inStock: true,
          url: "https://bomba.md/ro/product/televizor-led-samsung-ue50du8000uxua-1050696/"
        }
      },
      specs: {
        screen: "50 inch LED",
        resolution: "4K (3840 x 2160)",
        hdr: "HDR10+",
        processor: "Crystal Processor 4K",
        ports: "3 HDMI, 2 USB",
        smart: "Tizen OS"
      }
    },
    {
      id: " Sony-KD43X75WLPAEP",
      name: " Sony KD43X75WLPAEP\" Smart TV 4K ",
      category: "TV",
      brand: "Sony",
      stores: {
        darwin: {
          price: 9999,
          inStock: true,
          url: "https://darwin.md/televizor-sony-kd43x75wlpaep-43-led-4k-smart-tv-black.html#nav-info-product"
        },
        orange: {
          price: 10000,
          inStock: false,
          url: ""
        },
        enter: {
          price: 9999,
          inStock: true,
          url: "https://enter.online/televizoare/sony-kd43x75wlpaep-43-led-4k-smart-tv-black"
        },
        maximum: {
          price: 29999,
          inStock: true,
          url: "https://maximum.md/samsung-qn90b"
        },
        ultra: {
          price: 9499,
          inStock: true,
          url: "https://ultra.md/ru/product/43-led-smart-tv-sony-kd43x75wlpaep-4k-hdr-3840x2160-google-tv-black"
        },
        bomba: {
          price: 10000,
          inStock: false,
          url: ""
        }
      },
      specs: {
        screen: "43 inch LED",
        resolution: "4K (3840 x 2160)",
        hdr: "HDR10",
        processor: "Processor X1",
        ports: "4 HDMI, 2 USB"
      }
    }
  ]
}