import {
  InfiniteData,
  UseInfiniteQueryOptions,
  UseQueryOptions
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export type InfiniteQueryOptions<
  Response,
  TError = AxiosError,
  TData = InfiniteData<Response>
> = UseInfiniteQueryOptions<Response, TError, TData>;

export type QueryOptions<
  Response,
  TError = AxiosError,
  TData = Response
> = UseQueryOptions<Response, TError, TData, unknown[]>;
