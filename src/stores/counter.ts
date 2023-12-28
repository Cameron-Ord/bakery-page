
import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {

  const state: { current_about: string | undefined } = {
    current_about: undefined
  };

  const mutators = {

  };

  const getters = {

  };


  return { state, mutators, getters }
})
