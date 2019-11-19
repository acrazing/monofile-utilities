/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-21 01:30:59
 */

/**
 * create utf8 mb4 field type
 * @param type
 */
export function utf8(type: string) {
  return type + " CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci'";
}
