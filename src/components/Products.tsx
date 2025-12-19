import React from 'react';
import { Eye, Ruler, Settings } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Products = () => {
  const { t } = useTranslation();

  const productCategories = [
    {
      title: t.forkAttachment,
      products: [
        {
          id: 9,
          name: t.forkAttachment15x05,
          image: "/attacco forche 1,5 .png",
          features: [
            `${t.width}: 1500 mm`, 
            `${t.length}: 500 mm`, 
            `${t.height}: 350 mm`, 
            t.availableWithFibrilene
          ],
          description: t.compactIndustrialBroom
        },
        {
          id: 10,
          name: t.forkAttachment2x05,
          image: "/attacco forche 2.png",
          features: [
            `${t.width}: 2000 mm`, 
            `${t.length}: 500 mm`, 
            `${t.height}: 350 mm`, 
            t.availableWithFibrilene
          ],
          description: t.industrialBroomReducedLength
        },
        {
          id: 1,
          name: t.forkAttachment2x1,
          image: "/mod attacco forche 2x1.png",
          features: [
            `${t.width}: 2000 mm`, 
            `${t.length}: 1000 mm`, 
            `${t.height}: 350 mm`, 
            `${t.weight}: 304 kg`
          ],
          description: t.industrialBroomForkAttachment
        },
        {
          id: 2,
          name: t.forkAttachment3x1,
          image: "/mod forche 3x1.png",
          features: [
            `${t.width}: 3000 mm`, 
            `${t.length}: 1000 mm`, 
            `${t.height}: 350 mm`, 
            `${t.weight}: 420 kg`
          ],
          description: t.largeIndustrialBroom
        }
      ]
    },
    {
      title: t.forkAttachmentWithBlade,
      products: [
        {
          id: 3,
          name: t.forkAttachmentBlade2x1,
          image: "/mod forche + lama 2x1.png",
          features: [
            `${t.width}: 2000 mm`, 
            `${t.length}: 1000 mm`, 
            `${t.height}: 700 mm`, 
            `${t.weight}: 358 kg`
          ],
          description: t.industrialBroomIntegratedBlade
        },
        {
          id: 4,
          name: t.forkAttachmentBlade3x1,
          image: "/mod forche + lama 3x1.png",
          features: [
            `${t.width}: 3000 mm`, 
            `${t.length}: 1000 mm`, 
            `${t.height}: 700 mm`, 
            `${t.weight}: 500 kg`
          ],
          description: t.largeBroomIntegratedBlade
        },
        {
          id: 11,
          name: t.forkBladeModelV,
          image: "/forche + lama model V.png",
          features: [
            `${t.width}: 2700 mm`, 
            `${t.length}: 1300 mm`, 
            `${t.height}: 700 mm`
          ],
          description: t.vModelBroom
        },
        {
          id: 12,
          name: t.forkDoubleBlade,
          image: "/forche + doppia lama.png",
          features: [
            `${t.width}: 3000 mm`, 
            `${t.length}: 1000 mm`, 
            `${t.height}: 700 mm`
          ],
          description: t.doubleBladeBroom
        }
      ]
    },
    {
      title: t.forkAttachmentWithGrippersAndOctopus,
      products: [
        {
          id: 5,
          name: t.forkGrippers2x1,
          image: "/mod forche + pinze 2x1.png",
          features: [
            `${t.width}: 2000 mm`, 
            `${t.length}: 1000 mm`, 
            `${t.height}: 1100 mm`, 
            `${t.weight}: 374 kg`
          ],
          description: t.industrialBroomGripperSystem
        },
        {
          id: 6,
          name: t.forkGrippers3x1,
          image: "/mod forche + pinze 3x1.png",
          features: [
            `${t.width}: 3000 mm`, 
            `${t.length}: 1000 mm`, 
            `${t.height}: 1100 mm`, 
            `${t.weight}: 540 kg`
          ],
          description: t.largeBroomGrippers
        },
        {
          id: 7,
          name: t.forkOctopus2x16,
          image: "/mod-forche-polipo-2x1-6.png",
          features: [
            `${t.width}: 2020 mm`, 
            `${t.length}: 1660 mm`, 
            `${t.height}: 720 mm`, 
            `${t.weight}: 915 kg`
          ],
          description: t.industrialBroomOctopusSystem
        },
        {
          id: 13,
          name: t.forkDoubleOctopus,
          image: "/forche con doppio polipo.png",
          features: [
            `${t.width}: 2020 mm`, 
            `${t.length}: 1660 mm`, 
            `${t.height}: 1000 mm`, 
            `${t.weight}: 1050 kg`
          ],
          description: t.doubleOctopusBroom
        }
      ]
    },
    {
      title: t.octopusAttachment,
      products: [
        {
          id: 15,
          name: t.octopusMini,
          image: "/polipo mini.png",
          features: [
            `${t.width}: 700 mm`,
            `${t.length}: 1000 mm`, 
            `${t.height}: 500 mm`,
            "Compact version for tight spaces"
          ],
          description: t.compactOctopusSystem
        },
        {
          id: 16,
          name: t.octopusRubberBase,
          image: "/attacco polipo base in gomma.png",
          features: [
            `${t.width}: 2150 mm`,
            `${t.height}: 700 mm`,
            `${t.weight}: 620 kg`,
            t.rubberBase
          ],
          description: t.octopusRubberBase
        },
        {
          id: 17,
          name: t.octopusReinforced,
          image: "/polipo rinforzata.png",
          features: [
            `${t.width}: 2500 mm`,
            `${t.length}: 1660 mm`,
            `${t.height}: 720 mm`,
            t.reinforcedStructure
          ],
          description: t.largeOctopusReinforced
        }
      ]
    },
    {
      title: t.shovelAttachmentAndForkWithShovelAndBlade,
      products: [
        {
          id: 8,
          name: t.shovelAttachment4x1,
          image: "/mod pala 4x1.png",
          features: [
            `${t.width}: 4000 mm`, 
            `${t.length}: 1000 mm`, 
            `${t.height}: 750 mm`, 
            `${t.weight}: 1200 kg`
          ],
          description: t.extraLargeBroomShovel
        },
        {
          id: 18,
          name: t.forkShovelBlade,
          image: "/forche + PALA CON LAMa.png",
          features: [
            `${t.width}: 4000 mm`,
            `${t.length}: 1000 mm`,
            `${t.height}: 700 mm`,
            `${t.weight}: 1500 kg`
          ],
          description: t.largeBroomShovelBlade
        }
      ]
    }
  ];

  // Generate JSON-LD Product Schema for SEO
  React.useEffect(() => {
    const allProducts = productCategories.flatMap(category => category.products);

    const productSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": allProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": `https://industrialbrooms.com${product.image}`,
          "brand": {
            "@type": "Brand",
            "name": "Industrial Brooms"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "EUR",
            "url": "https://industrialbrooms.com/#products"
          }
        }
      }))
    };

    // Remove existing product schema if present
    const existingScript = document.getElementById('product-schema');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new product schema
    const script = document.createElement('script');
    script.id = 'product-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(productSchema);
    document.head.appendChild(script);

    return () => {
      const script = document.getElementById('product-schema');
      if (script) {
        script.remove();
      }
    };
  }, [productCategories]);

  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            {t.productsTitle}
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            {t.productsDescription.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t.productsDescription.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
        
        {productCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <h3 className="text-3xl font-bold text-black mb-12 text-center border-b-4 border-red-600 pb-4">
              {category.title}
            </h3>
            
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {category.products.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-black">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                     className={`w-full h-32 transition-transform duration-300 hover:scale-110 ${
                        product.id === 7 ? 'object-contain bg-white' : 'object-cover'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                 <div className="p-3 min-h-[180px] flex flex-col">
                   <h4 className="font-bold text-black mb-3 text-sm leading-tight whitespace-nowrap">{product.name}</h4>
                    <p className="text-black text-xs mb-3 line-clamp-2">{product.description}</p>
                    
                   <div className="space-y-1 mb-4 flex-grow">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-black">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                   <div className="flex space-x-2 mt-auto">
                      <button
                        onClick={() => openModal(product)}
                        className="flex-1 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-black transition-colors font-semibold text-xs" 
                      >
                        {t.details}
                      </button>
                      <button
                        onClick={() => {
                          const subject = encodeURIComponent(`Richiesta preventivo per ${product.name}`);
                          const body = encodeURIComponent(`Salve,\n\nsono interessato al prodotto "${product.name}" e vorrei ricevere un preventivo.\n\nGrazie`);
                          window.location.href = `mailto:info@industrialbroom.com?subject=${subject}&body=${body}`;
                        }}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold text-xs"
                      >
                        {t.requestQuoteButton}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="bg-red-600 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t.advantagesTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="h-6 w-6 text-white" />
                  <span>{t.quickApplication}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Settings className="h-6 w-6 text-white" />
                  <span>{t.harmonicSteelBrushes}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Ruler className="h-6 w-6 text-white" />
                  <span>{t.totallyInterchangeable}</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">{t.discoverInfo}</h4>
              <p className="text-red-100 mb-6">
                Scopri come le nostre scope industriali possono migliorare l'efficienza della pulizia nei tuoi cantieri
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">{selectedProduct.name}</h3>
                  <p className="text-black mb-6">{selectedProduct.description}</p>
                  
                  <h4 className="text-lg font-semibold text-black mb-4">Caratteristiche Tecniche:</h4>
                  <h4 className="text-lg font-semibold text-black mb-4">{t.currentLanguage === 'it' ? 'Caratteristiche Tecniche:' : 'Technical Features:'}</h4>
                  <div className="space-y-3 mb-6">
                    {selectedProduct.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-black">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => {
                      const subject = encodeURIComponent(`Richiesta preventivo per ${selectedProduct.name}`);
                      const body = encodeURIComponent(`${t.currentLanguage === 'it' ? 'Salve' : 'Hello'},\n\n${t.currentLanguage === 'it' ? 'sono interessato al prodotto' : 'I am interested in the product'} "${selectedProduct.name}" ${t.currentLanguage === 'it' ? 'e vorrei ricevere un preventivo' : 'and would like to receive a quote'}.\n\n${t.currentLanguage === 'it' ? 'Grazie' : 'Thank you'}`);
                      window.location.href = `mailto:mail@giulianimetalli.com?subject=${subject}&body=${body}`;
                    }}
                    className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                  >
                    {t.requestQuoteButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;