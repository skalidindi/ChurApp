import React from "react";
import tailwind from "tailwind-rn";

import Text from "../Text";

export default function ErrorMessage({ error, visible }: { error: Error | undefined, visible: boolean }) {
  if (!visible || !error) return null;

  return <Text style={tailwind('text-red-500')}>{error}</Text>;
}
