import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

export default function SearchResult() {
  return (
    <>
      {isLoading ? <p>Loading...</p> : ""}

    </>
  )
}
