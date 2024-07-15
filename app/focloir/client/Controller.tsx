"use client";

import type { PhraseModelWithFavourites, GroupModel } from "@/types/models";
import { useEffect, useState } from "react";
import Search from "./Search";
import type { ChangeEvent } from "react";
import { filterPhrasesBySearchTerm, getLinkObject } from "@/utils";
import type { Session } from "@supabase/supabase-js";
import SortAndFilter from "./SortAndFilter";
import EditPhrase from "./EditPhrase";
import Phrases from "./Phrases";
import { MediumText, Popup } from "@/components";
import Sort from "./Sort";
import ChangeGroup from "./ChangeGroup";
import { usePathname, useRouter } from "next/navigation";
import AddPhrase from "./AddPhrase";

interface ControllerProps {
  phrases: PhraseModelWithFavourites[] | null;
  groups: GroupModel[] | null;
  group_id: number | null;
  favourite: boolean;
  sort: string | null;
  session: Session | null;
}

export default function Controller({
  phrases,
  groups,
  group_id,
  session,
  favourite,
  sort,
}: ControllerProps) {
  const [displayPhrases, setDisplayPhrases] = useState<
    PhraseModelWithFavourites[]
  >([]);
  const [groupId, setGroupId] = useState<number | null>(group_id);
  const [group, setGroup] = useState<GroupModel | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editPhrase, setEditPhrase] = useState<number | null>(null);
  const [order, setOrder] = useState<string>(
    sort === "newest" ? "newest" : "oldest",
  );
  const [editPopupOpen, setEditPopupOpen] = useState<boolean>(false);
  const [sortPopupOpen, setSortPopupOpen] = useState<boolean>(false);
  const [groupPopupOpen, setGroupPopupOpen] = useState<boolean>(false);
  const [addPhrasePopupOpen, setAddPhrasePopupOpen] = useState<boolean>(false);
  const [showFavourites, setShowFavourites] = useState<boolean>(favourite);
  const router = useRouter();
  const pathname = usePathname();

  const filterPhrasesByFavourite = (_phrases: PhraseModelWithFavourites[]) => {
    if (showFavourites && _phrases.length > 0) {
      return _phrases.filter((p) => p.p_is_favourited);
    }
    return _phrases;
  };

  const sortPhrases = (_phrases: PhraseModelWithFavourites[]) => {
    let sortedPhrases = [];
    if (order === "newest") {
      sortedPhrases = _phrases.sort(
        (a, b) =>
          new Date(b.p_created_at).getTime() -
          new Date(a.p_created_at).getTime(),
      );
    } else {
      sortedPhrases = _phrases.sort(
        (a, b) =>
          new Date(a.p_created_at).getTime() -
          new Date(b.p_created_at).getTime(),
      );
    }
    return sortedPhrases;
  };

  const filterBySearch = (
    _phrases: PhraseModelWithFavourites[],
    term: string,
  ) => {
    return filterPhrasesBySearchTerm(_phrases, term);
  };

  const handleChangeGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("e.target.value:", e.target.value);
    if (e.target.value !== undefined) {
      setGroupId(Number(e.target.value));
      console.log("pushing to router");
    }
  };

  useEffect(() => {
    if (groups !== null && groups.length !== 0) {
      const group = groups.find((group) => group.id === groupId);
      setGroup(group === undefined ? null : group);
    }
    if (groupId !== group_id) {
      setGroupPopupOpen(false);
      router.push(
        `/focloir?groupId=${groupId}&favourite=${showFavourites}&sort=${order}`,
      );
    }
  }, [groupId]);

  useEffect(() => {
    router.push(
      `/focloir?groupId=${groupId}&favourite=${showFavourites}&sort=${order}`,
    );
  }, [showFavourites]);

  useEffect(() => {
    router.push(
      `/focloir?groupId=${groupId}&favourite=${showFavourites}&sort=${order}`,
    );
  }, [order]);

  useEffect(() => {
    sortPopupOpen && setSortPopupOpen(false);
    const favouritedPhrases = filterPhrasesByFavourite(
      phrases !== null ? phrases : [],
    );
    const sortedPhrases = sortPhrases(favouritedPhrases);
    const searchedPhrases = filterBySearch(sortedPhrases, searchTerm);
    setDisplayPhrases(searchedPhrases);
  }, [showFavourites, order, searchTerm, phrases]);

  useEffect(() => {
    editPhrase === null ? setEditPopupOpen(false) : setEditPopupOpen(true);
  }, [editPhrase]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const navbarLinkItem = getLinkObject(pathname);
  console.log("navbarLinkItem", navbarLinkItem);

  return (
    <div className="relative w-full flex flex-grow flex-col">
      <div className="relative max-w-xl">
        <Popup isOpen={editPopupOpen} setOpen={setEditPopupOpen}>
          <EditPhrase
            phrase={displayPhrases.find((p) => p.p_id === editPhrase)}
            setEditPhrase={(id) => {
              setEditPhrase(id);
            }}
          />
        </Popup>
      </div>
      <div className="relative max-w-xl">
        <Popup isOpen={groupPopupOpen} setOpen={setGroupPopupOpen}>
          <ChangeGroup
            groupId={groupId}
            handleChangeGroup={handleChangeGroup}
            groups={groups}
          />
        </Popup>
      </div>
      <div className="relative max-w-xl">
        <Popup isOpen={sortPopupOpen} setOpen={setSortPopupOpen}>
          <Sort order={order} setOrder={setOrder} />
        </Popup>
      </div>
      <div className="relative max-w-xl">
        <Popup isOpen={addPhrasePopupOpen} setOpen={setAddPhrasePopupOpen}>
          <AddPhrase
            groupId={groupId}
            setAddPhrasePopupOpen={(open) => {
              setAddPhrasePopupOpen(open);
            }}
          />
        </Popup>
      </div>
      <div className="w-full">
        <div className="flex justify-center bg-primary-600">
          <div className="flex flex-grow justify-center items-center">
            {navbarLinkItem !== undefined ? (
              <MediumText
                text_en={navbarLinkItem?.name_en}
                text_ga={navbarLinkItem?.name_ga}
                dark={true}
                centered={true}
              />
            ) : (
              <div>no title</div>
            )}
          </div>
          <div className="max-w-xl w-full">
            <Search
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              setSearchTerm={setSearchTerm}
              groupId={groupId}
              userId={session?.user.id}
            />
            <SortAndFilter
              setGroupPopupOpen={setGroupPopupOpen}
              setSortPopupOpen={setSortPopupOpen}
              setAddPhrasePopupOpen={setAddPhrasePopupOpen}
              showFavourites={showFavourites}
              setShowFavourites={setShowFavourites}
            />
          </div>
        </div>
        <div className="w-full p-2">
          <MediumText
            text_en={group !== null ? group.name_en : "All Groups"}
            text_ga={group !== null ? group.name_ga : "Gach Grúpa"}
            centered={true}
          />
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-xl flex flex-col flex-grow p-2">
            <Phrases
              phrases={displayPhrases}
              session={session}
              setEditPhrase={setEditPhrase}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
