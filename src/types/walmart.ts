export type Price = {
  price: number;
  currency: string;
};

export type Rating = {
  count: number;
  rating: number;
};

export type Seller = {
  name: string;
};

export type Variant = {
  url: string;
  title: string;
  product_id: string;
};
export type Context = {
  key: string;
  value: unknown;
};

export type Link = {
  rel: string;
  href: string;
  method: string;
};

export type Organic = {
  url: string;
  image: string;
  price: Price;
  title: string;
  rating: Rating;
  seller: Seller;
  product_id: string;
  badge?: string;
  variants?: Variant[];
};
export type Content = {
  url: string;
  organic: Organic[];
  total_results: number;
  last_visible_page: number;
  parse_status_code: number;
};
export type Result = {
  content: Content;
};
export type SearchResult = {
  results: Result[];
  total_results: number;
  last_visible_page: number;
  parse_status_code: number;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
};

export type Job = {
  callback_url: string;
  client_id: number;
  context: Context[];
  created_at: string;
  domain: string;
  geo_location: null | string;
  id: string;
  limit: number;
  locale: null | string;
  pages: number;
  parse: boolean;
  parser_type: null | string;
  parsing_instructions: null | string;
  browser_instructions: null | string;
  render: null | boolean;
  url: string;
  query: string;
  source: string;
  start_page: number;
  status: string;
  storage_type: null | string;
  storage_url: null | string;
  subdomain: string;
  content_encoding: string;
  updated_at: string;
  user_agent_type: string;
  session_info: null | string;
  statuses: unknown[];
  client_notes: null | string;
  _links: Link[];
};

export type Meta = {
  sku: string;
  gtin: string;
};
export type SelectedOption = {
  key: string;
  value: string;
};
export type Specification = {
  key: string;
  value: string;
};
export type Variation = {
  state: string;
  product_id: string;
  selected_options: SelectedOption[];
};

export type Product = {
  url: string;
  meta: Meta;
  price: number;
  title: string;
  images: string[];
  rating: Rating;
  seller: Seller;
  currency: string;
  warranty: string;
  _warnings: string[];
  variations: Variation[];
  breadcrumbs: string[];
  description: string;
  out_of_stock: boolean;
  specifications: Specification[];
  parse_status_code: number;
  price_strikethrough?: number;
};
export type ProductContent = {
  content: Product;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: string;
  parser_type: string;
};
export type WalmartProductResult = {
  results: ProductContent[];
  job: Job;
};
