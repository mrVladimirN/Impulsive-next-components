import fetchProduct from '@/lib/fetchProduct';
import { notFound } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import AddToCartButton from '@/components/add-to-cart-button';

type ProductPageProps = {
  searchParams: {
    url: string;
  };
};
const ProductPage = async ({ searchParams: { url } }: ProductPageProps) => {
  const product = await fetchProduct(url);
  if (!product) return notFound();
  return (
    <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
      <div className="hidden lg:inline space-y-4">
        {product.content.images.map((image, i) => (
          <Image
            key={image}
            src={image}
            alt={`${product.content.title} ${i}`}
            width={90}
            height={90}
            className="border rounded-sm"
          ></Image>
        ))}
      </div>
      <Carousel
        opts={{
          loop: true
        }}
        className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20"
      >
        <CarouselContent>
          {product.content.images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-2 relative">
                  <Image
                    key={image}
                    src={image}
                    alt={`${product.content.title} ${i}`}
                    width={400}
                    height={400}
                    className="border rounded-sm"
                  ></Image>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex-1 border rounded-md w-full p-5 space-y-5">
        <h1 className="text-3xl font-bold">{product.content.title}</h1>
        <div className="space-x-2">
          {product
            && product.content
            && product.content.breadcrumbs
            && product.content.breadcrumbs.map((breadcrump, i) => (
              <Badge
                key={breadcrump + i}
                className={breadcrump}
                variant="outline"
              >
                {breadcrump}
              </Badge>
            ))}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: product.content.description }}
          className="py-5"
        />
        {product.content.rating && (
          <p className="text-yellow-500 text-sm">
            {product.content.rating.rating} ⭐
            <span className="text-gray-400 ml-2">
              ({product.content.rating.count} reviews)
            </span>
          </p>
        )}
        <p className="text-2xl font-bold mt-2">
          {product?.content.currency} {product.content.price}
        </p>
          <AddToCartButton product={product.content}/>
        <h3 className="font-bold text-xl pt-10">Specifications</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Specification</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
             {product.content.specifications.map((spec) => (
              <TableRow key={spec.key}>
                <TableCell className="font-medium">{spec.key}</TableCell>
                <TableCell >{spec.value}</TableCell>
              </TableRow>
             ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductPage;
