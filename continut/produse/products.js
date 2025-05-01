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
          price: 12599,
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
          price: 14499,
          inStock: true,
          url: "https://darwin.md/apple-iphone-15-128-gb-single-sim-5g-black.html#nav-info-product"
        },
        orange: {
          price: 15799,
          inStock: true,
          url: "https://www.orange.md/ro/shop/catalog/telefoane/toate-telefoanele/iphone-15-128gb.html"
        },
        enter: {
          price: 14999,
          inStock: true,
          url: "https://enter.online/telefoane/smartphone-uri/apple-iphone-15-128-gb-5g-single-sim-pink"
        },
        maximum: {
          price: 14999,
          inStock: true,
          url: "https://maximum.md/ro/6744031/"
        },
        ultra: {
          price: 15699,
          inStock: true,
          url: "https://ultra.md/product/iphone-15-128gb-black-md"
        },
        bomba: {
          price: 14999,
          inStock: true,
          url: "https://bomba.md/ro/product/smartphone-apple-iphone-15-128gb-black-102937767//"
        }
      },
      specs: {
        screen: "6.1 Super Retina XDR OLED",
        processor: "Apple A16 Bionic",
        ram: "6GB",
        storage: "128GB",
        camera: "12P + 48MP + 12MP",
        battery: "3349 mAh"
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
      id: "samsung-a55",
      name: "Samsung Galaxy A55",
      category: "Smartphone",
      brand: "Samsung",
      stores: {
        darwin: {
          price: 7799,
          inStock: true,
          url: "https://darwin.md/samsung-galaxy-a55-a556-8-gb-128-gb-dual-sim-5g-awesome-ice-blue.html"
        },
        orange: {
          price: 7199,
          inStock: true,
          url: "https://www.orange.md/ru/shop/catalog/telefoane/toate-telefoanele/samsung-galaxy-a55-8-128gb.html"
        },
        enter: {
          price: 7799,
          inStock: true,
          url: "https://enter.online/telefoane/smartphone-uri/samsung-galaxy-a55-a556-8-gb-128-gb-5g-dual-sim-awesome-lemon"
        },
        maximum: {
          price: 7799,
          inStock: true,
          url: "https://maximum.md/ro/6825521/"
        },
        ultra: {
          price: 7799,
          inStock: false,
          url: "https://ultra.md/product/a55-5g-8128gb-black"
        },
        bomba: {
          price: 7799,
          inStock: true,
          url: "https://bomba.md/ro/product/smartphone-samsung-galaxy-a55-6-128gb-awesome-ice-blue-1023946/"
        }
      },
      specs: {
        screen: "6.6 inch Super AMOLED",
        processor: "Exynos 1480",
        ram: "8GB",
        storage: "128GB",
        camera: "50MP + 12MP + 5MP",
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
    },
    {
      id: "xiaomi-redmi-note-13-pro-plus",
      name: "Xiaomi Redmi Note 13 Pro+",
      category: "Smartphone",
      brand: "Xiaomi",
      stores: {
        darwin: {
          price: 6999,
          inStock: true,
          url: "https://darwin.md/xiaomi-redmi-note-13-pro-8-gb-256-gb-dual-sim-5gmidnight-black.html"
        },
        orange: {
          price: 6999,
          inStock: false,
          url: "https://www.orange.md/ro/shop/catalog/telefoane/toate-telefoanele/xiaomi-redmi-note-13-pro---8-512gb.html"
        },
        enter: {
          price: 6999,
          inStock: true,
          url: "https://enter.online/telefoane/smartphone-uri/xiaomi-redmi-note-13-pro-8-gb-256-gb-5g-dual-sim-midnight-black"
        },
        maximum: {
          price: 6999,
          inStock: true,
          url: "https://maximum.md/ru/6812352/"
        },
        ultra: {
          price: 6999,
          inStock: true,
          url: "https://ultra.md/product/redmi-note-13-pro-plus-5g-8256gb-eu-aurora-purple"
        },
        bomba: {
          price: 6999,
          inStock: true,
          url: "https://bomba.md/ro/category/telefoane-mobile-686094/xiaomi/redmi-note-13-pro-plus/256/8-gb/"
        }
      },
      specs: {
        screen: "6.67 inch AMOLED, 120Hz",
        processor: "MediaTek Dimensity 7200 Ultra",
        ram: "8GB",
        storage: "256GB",
        camera: "200MP + 8MP + 2MP",
        battery: "5000mAh"
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
      id: "macbook-air-15",
      name: "MacBook Air 15",
      category: "Laptop",
      brand: "Apple",
      stores: {
        darwin: {
          price: 23990,
          inStock: true,
          url: "https://darwin.md/laptop-apple-macbook-air-15-2024-m3-c8-g10-8-gb-256-gb-vga-integrata-silver.html"
        },
        orange: {
          price: 30499,
          inStock: false,
          url: "https://www.orange.md/ro/shop/catalog/laptopuri/toate-laptopurile/laptop-apple-macbook-air-15-m3-2024-8-256gb.html"
        },
        enter: {
          price: 30690,
          inStock: false,
          url: "https://enter.online/laptopuri/apple-macbook-air-15-2024-m3-c8-g10-8-gb-256-gb-vga-integrata-midnight"
        },
        maximum: {
          price: 27489,
          inStock: true,
          url: "https://maximum.md/ro/6824768/"
        },
        ultra: {
          price: 25490,
          inStock: false,
          url: "https://ultra.md/product/nb-apple-macbook-air-15-3-mrym3rua-space-grey-m3-8gb-256gb"
        },
        bomba: {
          price: 25490,
          inStock: true,
          url: "https://bomba.md/ro/product/laptop-apple-153-2024-1078026/"
        }
      },
      specs: {
        screen: "15.3 inch Liquid Retina",
        processor: "M2",
        ram: "8GB",
        storage: "256GB",
        gpu: "Integrated",
        battery: "66.5Wh"
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
          price: 13900,
          inStock: true,
          url: "https://shop.orange.eg/en/devices/laptops/dell-vostro-3530-intel-i5"
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
      id: "dell-latitude-5540-i5",
      name: "Dell Latitude 5540",
      category: "Laptop",
      brand: "Dell",
      stores: {
        darwin: {
          price: 30890,
          inStock: true,
          url: "https://darwin.md/laptop-dell-latitude-5540-core-i5-1335u-16-gb-512-gb-vga-integrata-gray.html#nav-info-product"
        },
        orange: {
          price: 28990,
          inStock: false,
          url: "https://shop.orange.eg/en/devices/laptops/dell-latitude-5540-i5"
        },
        enter: {
          price: 30890,
          inStock: true,
          url: "https://enter.online/laptopuri/dell-latitude-5540-core-i5-1335u-16-gb-512-gb-vga-integrata-gray"
        },
        maximum: {
          price: 15799,
          inStock: true,
          url: "https://maximum.md/ro/6902320/"
        },
        ultra: {
          price: 22990,
          inStock: true,
          url: "https://ultra.md/product/nb-dell-15-6-latitude-5540-grey-core-i5-1335u-16gb-512gb"
        },
        bomba: {
          price: 29999,
          inStock: false,
          url: "https://bomba.md/ro/product/laptop-156-dell-latitude-5540---intel-core-i5-1335u---8gb---512gb---gray-7094070/"
        }
      },
      specs: {
        screen: "15.6 inch Full HD",
        processor: "Intel Core i5-1335U",
        ram: "16GB",
        storage: "512GB SSD",
        gpu: "Intel Iris Xe Graphics",
        battery: "54Wh"
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
    },
    {
      id: "lenovo-ideapad-5-i5",
      name: "Lenovo IdeaPad 5",
      category: "Laptop",
      brand: "Lenovo",
      stores: {
        darwin: {
          price: 8490,
          inStock: true,
          url: "https://darwin.md/laptop-lenovo-ideapad-5-15alc05t1re-graphite-gray.html"
        },
        enter: {
          price: 8490,
          inStock: true,
          url: "https://enter.online/laptopuri/lenovo-ideapad-5-15alc05t1re-ryzen-5-5500u-8-gb-512-gb-vga-integrata-gray"
        },
        ultra: {
          price: 8490,
          inStock: false,
          url: "https://ultra.md/product/nb-lenovo-15-6-ideapad-5-15alc05-grey-ryzen-5-5500u-8gb-512gb"
        },
        bomba: {
          price: 8500,
          inStock: false,
          url: "https://bomba.md/ru/product/noutbuk-156-lenovo-ideapad-5-15ial7---intel-core-i5-1235u---16gb---512gb-ssd---cloud-grey-7091253/"
        },
        maximum: {
          price: 8500,
          inStock: false,
          url: "https://maximum.md/ro/6727611/"
        },
        orange: {
          price: 8599,
          inStock: false,
          url: "https://www.orange.md/ro/shop/catalog/laptopuri/laptopuri-lenovo"
        }
      },
      specs: {
        screen: "15.6 inch Full HD (1920 x 1080) IPS",
        processor: "Intel Core i5-1135G7",
        ram: "8GB DDR4",
        storage: "512GB SSD",
        gpu: "Intel Iris Xe Graphics",
        battery: "57Wh"
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
      id: "LG-43UT81006LA",
      name: "LG 43UT81006LA Smart TV",
      category: "TV",
      brand: "LG",
      stores: {
        darwin: {
          price: 7390,
          inStock: true,
          url: "https://darwin.md/televizor-lg-43ut81006la-43-led-4k-smart-tv-black.html"
        },
        orange: {
          price: 7799,
          inStock: true,
          url: "https://www.orange.md/ru/shop/catalog/tv/toate-tv/televizor-lg-43-ut81006la.html"
        },
        enter: {
          price: 7390,
          inStock: true,
          url: "https://enter.online/ru/televizory/lg-43ut81006la-43-led-4k-smart-tv-chernyi"
        },
        maximum: {
          price: 7399,
          inStock: false,
          url: "https://maximum.md/ro/6837594/"
        },
        ultra: {
          price: 7399,
          inStock: true,
          url: "https://ultra.md/ru/product/43-led-smart-tv-lg-43ut81006la-real-4k-3840-x-2160-webos-black"
        },
        bomba: {
          price: 7499,
          inStock: true,
          url: "https://bomba.md/ro/product/televizor-led-lg-43ut81006la-1055113/"
        }
      },
      specs: {
        screen: "43 inch LED",
        resolution: "4K (3840 x 2160)",
        hdr: "HDR10 Pro",
        processor: "α5 AI Processor 4K Gen7",
        ports: "3 HDMI, 2 USB",
        smart: "webOS 24"
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
      id: "Samsung-QE55Q60DAUXUA",
      name: "Samsung QE55Q60DAUXUA Smart TV",
      category: "TV",
      brand: "Samsung",
      stores: {
        darwin: {
          price: 10990,
          inStock: true,
          url: "https://darwin.md/televizor-samsung-qe55q60dauxua-55-qled-4k-smart-tv-black.html"
        },
        orange: {
          price: 11499,
          inStock: true,
          url: "https://www.orange.md/ro/shop/catalog/tv/toate-tv/televizor-samsung-qe50q60dauxua.html"
        },
        enter: {
          price: 10990,
          inStock: true,
          url: "https://enter.online/televizoare/samsung-qe55q60dauxua-55-qled-4k-smart-tv-black"
        },
        maximum: {
          price: 10949,
          inStock: true,
          url: "https://maximum.md/ro/6832063/"
        },
        ultra: {
          price: 10999,
          inStock: true,
          url: "https://ultra.md/product/55-led-smart-tv-samsung-qe55q60dauxua-qled-3840x2160-tizen-os-black"
        },
        bomba: {
          price: 10999,
          inStock: true,
          url: "https://bomba.md/ro/product/televizor-qled-samsung-qe55q60dauxua-1029450/"
        }
      },
      specs: {
        screen: "55 inch QLED",
        resolution: "4K (3840 x 2160)",
        hdr: "Quantum HDR, HDR10+ Adaptive",
        processor: "Quantum Processor Lite 4K",
        ports: "3 HDMI, 2 USB",
        smart: "Tizen OS 8.0"
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
    },
    {
      id: "Sony-KD50X75WLPAEP",
      name: "Sony KD50X75WLPAEP Smart TV 4K",
      category: "TV",
      brand: "Sony",
      stores: {
        darwin: {
          price: 12799,
          inStock: true,
          url: "https://darwin.md/televizor-sony-kd50x75wlpaep-50-led-4k-smart-tv-black.html"
        },
        orange: {
          price: 1,
          inStock: false,
          url: ""
        },
        enter: {
          price: 12799,
          inStock: true,
          url: "https://enter.online/televizoare/sony-kd50x75wlpaep-50-led-4k-smart-tv-black"
        },
        maximum: {
          price: 12999,
          inStock: false,
          url: ""
        },
        ultra: {
          price: 12799,
          inStock: true,
          url: "https://ultra.md/ru/product/50-led-smart-tv-sony-kd50x75wlpaep-4k-hdr-3840x2160-google-tv-black"
        },
        bomba: {
          price: 12990,
          inStock: false,
          url: ""
        }
      },
      specs: {
        screen: "50 inch LED",
        resolution: "4K (3840 x 2160)",
        hdr: "HDR10",
        processor: "Processor X1",
        ports: "4 HDMI, 2 USB"
      }
    }
    
  ]
}