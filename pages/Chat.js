
import { useState, useEffect, useRef } from 'react';
import { Configuration, OpenAIApi } from "openai";
import { useQuery, useQueryClient, useInfiniteQuery } from "react-query";
import { useGetFetchQuery } from '../utils/useGetFetchQuery';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';




const ChatPage = () => {


    useBottomScrollListener(() => {
        fetchNextPage(),
        {
            offset: 100,
            debounce: 500,
            triggerOnNoScroll: true
        }
    });

    const fetchPokemon = async ({
        pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
    }) => {
        const request = await fetch(pageParam);
        const { results, next } = await request.json();
        return { response: results, nextPage: next };
    };

    const listInnerRef = useRef();

    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                alert("reached bottom");
            }
        }
    };



    const queryClient = useQueryClient()




    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery('pokemon', fetchPokemon, {
            getNextPageParam: (lastPage) => lastPage.nextPage,
        });

    console.log(data)

    return (
        <div className=' mx-auto bg-slate-600 w-full min-h-screen p-4'
        >
            <div class="grid md:p-4 p-2 md:grid-cols-3 gap-4  justify-center "

                onScroll={onScroll}
                ref={listInnerRef}>
                {data && data?.pages.map((group, i) =>
                    group.response.map((pokemon) =>

                        <div class="bg-gradient-to-r from-teal-700 to-teal-600/20 rounded-lg p-4 shadow-lg ">
                            <h3 class="text-white text-2xl font-bold mb-2">{pokemon.name}</h3>
                            <p class="text-white text-base mb-2">{pokemon?.url}</p>

                            <div class="justify-center mt-4 mx-auto">
                                <button class="bg-transparent border-white border text-white font-bold py-2 px-4 rounded-full">Learn More</button>
                            </div>
                        </div>)

                )}

                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </button>



            </div>
        </div>
    );
};

export default ChatPage;