import { FloatingDots } from "@/components/FloatingDots";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { Reveal } from "@/components/Reveal";
import { Carousel } from "@/components/Carousel";

const StoreBadge = ({ platform, accent }) => (
  <span
    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border whitespace-nowrap"
    style={{
      color: accent,
      borderColor: `color-mix(in srgb, ${accent} 40%, transparent)`,
      backgroundColor: `color-mix(in srgb, ${accent} 10%, transparent)`,
    }}
  >
    <span
      className="w-1.5 h-1.5 rounded-full animate-pulse"
      style={{ backgroundColor: accent }}
    />
    {platform}
  </span>
);

export const Products = () => {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <FloatingDots variant={3} />
      {/* Bg glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <Reveal className="text-center mx-auto max-w-2xl mb-14">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Shipped &amp; Live
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Products people
            <span className="font-serif italic font-normal text-white">
              {" "}
              actually use.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Published on the Google Play Store and the Chrome Web Store,
            maintained by me, and in use right now. I build these end to end
            and market them myself: the campaigns, the content and the store
            positioning that turn a release into actual users.
          </p>
        </Reveal>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-7">
          {products.map((product, idx) => (
            <Reveal
              key={product.title}
              delay={idx * 90}
              className="group card-surface rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              {/* Cover */}
              <div className="relative">
                <Carousel
                  images={product.images ?? [product.image]}
                  alt={product.title}
                  interval={4200 + idx * 400}
                  aspect="aspect-[16/10]"
                  objectClass="object-cover object-center"
                />
              </div>

              {/* Body */}
              <div className="p-6 space-y-3 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3">
                  <StoreBadge platform={product.platform} accent={product.accent} />
                  <span className="text-[11px] text-muted-foreground tabular-nums">
                    {product.version}
                  </span>
                </div>

                <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                  {product.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {product.summary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {product.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-surface text-[11px] font-medium border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all pt-1"
                >
                  {product.linkLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
